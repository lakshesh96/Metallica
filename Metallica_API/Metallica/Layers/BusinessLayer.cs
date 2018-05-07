using Metallica.Custom_Classes;
using Metallica.Models;
using Metallica.MQueue;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Metallica.Layers
{
    public enum TypeOfFunction
    {
        Add,
        Update,
        Delete
    }
    public class BusinessLayer
    {
        private TradeMQueue tradeQueue;
        private TickerMQueue tickerQueue;
        private MetallicaContext context;
        public BusinessLayer()
        {
           tradeQueue = new TradeMQueue();
            tickerQueue = new TickerMQueue();
            context = new MetallicaContext();
        }   
        public void ChangePrice(Trade trade,TypeOfFunction type) //Change price after trade management
        {
            Commodity commodity = context.Commodities.Find(trade.CommodityId);
            double priceVariation = ((commodity.CurrentPrice*trade.Quantity) / (commodity.BasePrice*100)) ;
            if(trade.Side == Side.Buy)
            {

                if(type == TypeOfFunction.Add)
                {
                    commodity.CurrentPrice += priceVariation;
                }
                else if(type==TypeOfFunction.Delete)
                {
                    if(priceVariation>commodity.CurrentPrice)
                        commodity.CurrentPrice = 0;
                    else
                        commodity.CurrentPrice -= priceVariation;
                }
                else
                {
                    commodity.CurrentPrice += priceVariation;
                }
            }
            else
            {
                if (type == TypeOfFunction.Add)
                {
                    if (priceVariation > commodity.CurrentPrice)
                        commodity.CurrentPrice = 0;
                    else
                        commodity.CurrentPrice -= priceVariation;
                }
                else if (type == TypeOfFunction.Delete)
                {
                    commodity.CurrentPrice += priceVariation;
                }
                else
                {
                    if (priceVariation > commodity.CurrentPrice)
                        commodity.CurrentPrice = 0;
                    else
                        commodity.CurrentPrice -= priceVariation;
                }
            }
            UpdateTickerNotification(commodity);
            context.SaveChanges();
            
        }
        public void UpdateTickerNotification(Commodity commodity) //Update for Price Ticker
        {
            tickerQueue.SendMessage(commodity);
        } 
        public void AddNotification(Trade trade)
        {
            TradeQueueMessage<Trade> tradeMessage = new TradeQueueMessage<Trade>("Trade Added", trade);
            tradeQueue.SendMessage(tradeMessage);
            ChangePrice(trade, TypeOfFunction.Add);
        }   //Notification for Trade Addition
        public void UpdateNotification(Trade trade)
        {
            TradeQueueMessage<Trade> tradeMessage = new TradeQueueMessage<Trade>("Trade Updated", trade);
            tradeQueue.SendMessage(tradeMessage);
            ChangePrice(trade, TypeOfFunction.Update);
        }   //Notification for Trade Updation
        public void DeleteNotification(Trade trade)
        {
            TradeQueueMessage<Trade> tradeMessage = new TradeQueueMessage<Trade>("Trade Deleted", trade);
            tradeQueue.SendMessage(tradeMessage);
            ChangePrice(trade, TypeOfFunction.Delete);
        }   //Notification for Trade Deletion
    }
}