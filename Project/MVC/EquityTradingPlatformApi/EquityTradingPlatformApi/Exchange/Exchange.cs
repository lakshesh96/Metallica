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
        public Exchange(int id)                         //constructer to accept 
        {
            this.db = new ProjectContext();
            this.block = db.Blocks.Find(id);
            
        }
        public bool FillBlock()                         //FillBlock
        {
            Random random = new Random();
            int totalQuantity = GetTotal();             //Get total quantity for all orders in block 
            if (totalQuantity == 0)
                return false;
            
            int FillQuantity = random.Next(5*totalQuantity);      //Random filling within 5*totalquantity
            if(FillQuantity>=totalQuantity)
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
                    if(totalQuantity<item.Quantity)
                    {
                        item.OrderStatus = OrderStatus.Partial;
                        this.block.BlockStatus = BlockStatus.Partial;
                    }
                    else
                    {
                        item.BlockId =null;
                        CurrentPosition currentPositionobject = new CurrentPosition();
                        currentPositionobject.Date = System.DateTime.Now;
                       // currentPositionobject.PriceExecuted = 
                       // db.CurrentPositions.Add();
                    }
                }

            }
            return true;
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
    }
}