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
        public BusinessLayer()
        {
           tradeQueue = new TradeMQueue();
        }
        public void ChangePrice(Trade trade,TypeOfFunction type)
        {
            if(trade.Side == Side.Buy)
            {
                if(type == TypeOfFunction.Add)
                {

                }
                else if(type==TypeOfFunction.Delete)
                {

                }
                else
                {

                }
            }
            else
            {
                if (type == TypeOfFunction.Add)
                {

                }
                else if (type == TypeOfFunction.Delete)
                {

                }
                else
                {

                }
            }
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