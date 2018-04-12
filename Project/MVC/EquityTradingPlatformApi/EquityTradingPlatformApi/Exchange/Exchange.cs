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
        int VolumeAvailable = 0;
        public Exchange(int id)                         //constructer to accept 
        {
            this.db = new ProjectContext();
            this.block = db.Blocks.Find(id);
            this.stock = this.db.Stocks.Find(this.block.StocksId);
            this.side = this.block.Side;
            this.VolumeAvailable = this.stock.VolumeAvailable;
        }
        public bool FillBlock()                         //FillBlock
        {
                Random random = new Random();
                GetTotal();                     //Get total quantity for all orders in block 
                if (this.totalQuantity == 0)    //check for no orders
                    return false;

                this.FillQuantity = random.Next(2 * this.totalQuantity);      //Random filling within 2*totalquantity
                if ((this.FillQuantity >= this.totalQuantity&&this.VolumeAvailable >=this.totalQuantity&&this.side==Side.Buy)||(this.side==Side.Sell&&this.FillQuantity>=this.totalQuantity) )
                {
                    
                   this.block.BlockStatus = BlockStatus.Executed;
                    foreach (var item in this.orders)
                    {
                        item.OrderStatus = OrderStatus.Executed;
                        AddOrderFull(item);
                    }
                    this.stock.VolumeAvailable = this.VolumeAvailable;
                    db.SaveChanges();

            }
                else
                {
                    if (this.VolumeAvailable < this.totalQuantity && this.side==Side.Buy)
                    {
                        this.FillQuantity = this.VolumeAvailable;
                    }
                    foreach (var item in this.orders)
                    {
                        if (FillQuantity < item.Quantity && FillQuantity != 0)
                        {
                            if (item.OrderType == OrderType.Market || CheckStopValid(item) || CheckLimitValid(item) || CheckStopLimitValid(item))
                            {
                                AddOrderPartial(item);
                                break;
                            }
                        }
                        else if (FillQuantity >= item.Quantity)
                        {
                            if (item.OrderType == OrderType.Market || CheckStopLimitValid(item) || CheckStopValid(item) || CheckLimitValid(item))
                            {
                                AddOrderFull(item);
                            }
                        }
                        else if (FillQuantity == 0)
                        {
                            break;
                        }
                    }
                    this.stock.VolumeAvailable = this.VolumeAvailable;
                    db.SaveChanges();
                }
                return true;
            
        }
        public bool CheckLimitValid(Order item)
        {
            if (item.OrderType == OrderType.Limit)
            {
                if ((this.stock.CurrentPrice <= item.LimitPrice&&this.side==Side.Buy)||(this.stock.CurrentPrice>=item.LimitPrice&&this.side==Side.Sell))
                {
                    return true;
                }
            }
            return false;

        }
        public bool CheckStopValid(Order item)
        {
            if (item.OrderType == OrderType.Stop)
            {
                if ((this.stock.CurrentPrice >= item.StopPrice&&this.side==Side.Buy)||(this.side==Side.Sell&&this.stock.CurrentPrice <=item.StopPrice))
                {
                    return true;
                }
            }
            return false;
        }
        public bool CheckStopLimitValid(Order item)
        {
            if (item.OrderType == OrderType.StopLimit)
            {
                if ((this.stock.CurrentPrice >= item.StopPrice && this.stock.CurrentPrice <= item.LimitPrice&&this.side==Side.Buy)||(this.side==Side.Sell&& this.stock.CurrentPrice <= item.StopPrice && this.stock.CurrentPrice >= item.LimitPrice))
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
            this.totalQuantity -= item.Quantity;

            if (this.side == Side.Buy)
            {
                this.VolumeAvailable -= item.Quantity;
            }
            else if(this.side==Side.Sell)
            {
                this.VolumeAvailable += item.Quantity;                
            }
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
            item.Quantity -= this.FillQuantity;
            if (this.side == Side.Buy)
            {
                this.VolumeAvailable -= this.FillQuantity;
            }
            else if(this.side==Side.Sell)
            {
                this.VolumeAvailable += this.FillQuantity;
            }
            db.CurrentPositions.Add(currentPositionobject);
            this.FillQuantity = 0;
            this.totalQuantity = 0;
            

        }
    }
}