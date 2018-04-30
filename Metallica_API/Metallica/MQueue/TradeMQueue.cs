using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Messaging;
using Metallica.Models;

namespace Metallica.MQueue
{
    public class TradeMQueue
    {
        private string TradeQueueName = @".\Private$\Trade";
        private Boolean SendMessage(Trade trade)
            {
                MessageQueue messageQueue = null;
                if (!MessageQueue.Exists(TradeQueueName))
                    messageQueue = MessageQueue.Create(TradeQueueName);
                else
                    messageQueue = new MessageQueue(TradeQueueName);
                try
                {
                    messageQueue.Formatter = new XmlMessageFormatter(new Type[] { typeof(Trade) });
                    messageQueue.Send(trade);
                }
                catch
                {
                    return false;
                }
                finally
                {
                    messageQueue.Close();
                }
            return true;
            }


            private Trade ReceiveMessage()
            {
                if (!MessageQueue.Exists(TradeQueueName))
                    return null;
                MessageQueue messageQueue = new MessageQueue(TradeQueueName);
                Trade trade = null;
                try
                {
                    messageQueue.Formatter = new XmlMessageFormatter(new Type[] { typeof(Trade) });
                    trade = (Trade)messageQueue.Receive().Body;
                }
                catch { }
                finally
                {
                    messageQueue.Close();
                }
                return trade;
            }
    }
}