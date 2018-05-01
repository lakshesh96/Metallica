using Metallica.MQueue;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Metallica.Models
{
    public class NotificationLayer
    {
        private TradeMQueue tradeQueue;
        public NotificationLayer()
        {
           tradeQueue = new TradeMQueue();
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