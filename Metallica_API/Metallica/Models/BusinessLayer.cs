using Metallica.MQueue;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Metallica.Models
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
        public void ChangePrice(Trade trade,TypeOfFunction type)
        {
            Commodity commodity = context.Commodities.Find(trade.CommodityId);
            double priceVariation = (commodity.CurrentPrice / commodity.BasePrice) * 10;
            if(trade.Side == Side.Buy)
            {

                if(type == TypeOfFunction.Add)
                {
                    commodity.CurrentPrice += priceVariation;
                }
                else if(type==TypeOfFunction.Delete)
                {
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
                    commodity.CurrentPrice -= priceVariation;
                }
                else if (type == TypeOfFunction.Delete)
                {
                    commodity.CurrentPrice += priceVariation;
                }
                else
                {
                    commodity.CurrentPrice -= priceVariation;
                }
            }
            UpdateTickerNotification(commodity);
            context.SaveChanges();
            
        }
        public void UpdateTickerNotification(Commodity commodity)
        {
            tickerQueue.SendMessage(commodity);
        }
        public void AddTradeNotification(Trade trade)
        {
            GenericTrade<Trade> genericTrade = new GenericTrade<Trade>("Trade Added", trade);
            tradeQueue.SendMessage(genericTrade);
        }
        public void UpdateTradeNotification(Trade trade)
        {
            GenericTrade<Trade> genericTrade = new GenericTrade<Trade>("Trade Updated", trade);
            tradeQueue.SendMessage(genericTrade);
        }
        public void DeleteTradeNotification(Trade trade)
        {
            GenericTrade<Trade> genericTrade = new GenericTrade<Trade>("Trade Deleted", trade);
            tradeQueue.SendMessage(genericTrade);
        }
    }
}