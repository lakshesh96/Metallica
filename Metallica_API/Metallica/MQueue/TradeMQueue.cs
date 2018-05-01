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
        private string TradeQueueName = @".\Private$\GenericTrade";
        public Boolean SendMessage(GenericTrade<Trade> trade)
            {
                MessageQueue messageQueue = null;
                if (!MessageQueue.Exists(TradeQueueName))
                    messageQueue = MessageQueue.Create(TradeQueueName);
                else
                    messageQueue = new MessageQueue(TradeQueueName);
                try
                {
                    messageQueue.Formatter = new XmlMessageFormatter(new Type[] { typeof(GenericTrade<Trade>) });
                    messageQueue.Send(trade);
                }
                catch (Exception e)
                {
                    return false;
                }
                finally
                {
                    messageQueue.Close();
                }
            return true;
            }


            public GenericTrade<Trade> ReceiveMessage()
            {
                if (!MessageQueue.Exists(TradeQueueName))
                    return null;
                MessageQueue messageQueue = new MessageQueue(TradeQueueName);
                GenericTrade<Trade> trade = null;
                try
                {
                    messageQueue.Formatter = new XmlMessageFormatter(new Type[] { typeof(GenericTrade<Trade>) });
                    trade = (GenericTrade<Trade>)messageQueue.Receive().Body;
                }
                catch {
                    return null;
                }
                finally
                {
                    messageQueue.Close();
                }
                return trade;
            }
    }
}