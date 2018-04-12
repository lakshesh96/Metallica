using EquityTradingPlatformApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EquityTradingPlatformApi.Exchange
{
    public class Exchange
    {
        Block block;
        ProjectContext db;
        List<Order> orders;
        Stocks stock;
        Side side;
        int totalQuantity=0;
        int FillQuantity = 0;
        public Exchange(int id)                         //constructer to accept 
        {
            this.db = new ProjectContext();
            this.block = db.Blocks.Find(id);
            this.stock = this.db.Stocks.Find(this.block.StocksId);
            this.side = this.block.Side;
        }
        public bool FillBlock()                         //FillBlock
        {
            Random random = new Random();
            GetTotal();             //Get total quantity for all orders in block 
            if (this.totalQuantity == 0)
                return false;
            
            this.FillQuantity = random.Next(2*this.totalQuantity);      //Random filling within 2*totalquantity
            if(this.FillQuantity>=this.totalQuantity)
            {
                this.block.BlockStatus = BlockStatus.Executed;
                foreach(var item in this.orders)
                {
                    item.OrderStatus = OrderStatus.Executed;
                }
                db.SaveChanges();
            }
            else
            {
                foreach(var item in this.orders)
                {
                    if(FillQuantity<item.Quantity&&FillQuantity!=0)
                    {
                        if(item.OrderType == OrderType.Market||CheckBuyStopValid(item)||CheckBuyLimitValid(item)||CheckBuyStopLimitValid(item))
                        {
                            AddOrderPartial(item);
                        }
                    }
                    else if(FillQuantity>item.Quantity)
                    {
                        if (item.OrderType == OrderType.Market||CheckBuyStopLimitValid(item)||CheckBuyStopValid(item)||CheckBuyLimitValid(item))
                        {
                            AddOrderFull(item);
                        }
                    }
                    else if(FillQuantity == 0)
                    {
                        break;
                    }
                }
                db.SaveChanges();

            }
            return true;
        }
        public bool CheckBuyLimitValid(Order item)
        {
            if (item.OrderType == OrderType.Limit)
            {
                if (this.stock.CurrentPrice <= item.LimitPrice)
                {
                    return true;
                }
            }
            return false;

        }
        public bool CheckBuyStopValid(Order item)
        {
            if (item.OrderType == OrderType.Stop)
            {
                if (this.stock.CurrentPrice >= item.StopPrice)
                {
                    return true;
                }
            }
            return false;
        }
        public bool CheckBuyStopLimitValid(Order item)
        {
            if (item.OrderType == OrderType.StopLimit)
            {
                if (this.stock.CurrentPrice >= item.StopPrice && this.stock.CurrentPrice <= item.LimitPrice)
                {
                    return true;
                }
            }
            return false;
        }
        public int GetTotal()
        {
            if (this.block == null)
                return 0;
            int totalQuantity = 0;
            this.orders = (from n in db.Orders where n.BlockId == this.block.Id orderby n.DateAdded select n).ToList();
            int stockID = this.orders[0].StocksId;
            this.stock = db.Stocks.Find(stockID);
            foreach(var item in this.orders)
            {
                totalQuantity += item.Quantity;
            }
            return totalQuantity;
        }
        public void AddOrderFull(Order item)
        {
            item.BlockId = null;
            CurrentPosition currentPositionobject = new CurrentPosition();
            currentPositionobject.Date = System.DateTime.Now;
            currentPositionobject.PriceExecuted = this.stock.CurrentPrice;
            currentPositionobject.OrderId = item.Id;
            currentPositionobject.VolumeExecuted = item.Quantity;
            db.CurrentPositions.Add(currentPositionobject);
            this.FillQuantity -= item.Quantity;
        }
        public void AddOrderPartial(Order item)
        {
            item.OrderStatus = OrderStatus.Partial;
            this.block.BlockStatus = BlockStatus.Partial;
            CurrentPosition currentPositionobject = new CurrentPosition();
            currentPositionobject.Date = System.DateTime.Now;
            currentPositionobject.PriceExecuted = this.stock.CurrentPrice;
            currentPositionobject.OrderId = item.Id;
            currentPositionobject.VolumeExecuted = this.FillQuantity;
            db.CurrentPositions.Add(currentPositionobject);
            this.FillQuantity = 0;

        }
    }
}