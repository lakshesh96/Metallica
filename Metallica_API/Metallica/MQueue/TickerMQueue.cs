using Metallica.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Messaging;
using System.Web;

namespace Metallica.MQueue
{
    public class TickerMQueue
    {
        private string TickerQueueName = @".\Private$\Commodity";
        public Boolean SendMessage(Commodity commodity)
        {
            MessageQueue messageQueue = null;
            if (!MessageQueue.Exists(TickerQueueName))
                messageQueue = MessageQueue.Create(TickerQueueName);
            else
                messageQueue = new MessageQueue(TickerQueueName);
            try
            {
                messageQueue.Formatter = new XmlMessageFormatter(new Type[] { typeof(Commodity) });
                messageQueue.Send(commodity);
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


        public Commodity ReceiveMessage()
        {
            if (!MessageQueue.Exists(TickerQueueName))
                return null;
            MessageQueue messageQueue = new MessageQueue(TickerQueueName);
            Commodity commodity = null;
            try
            {
                messageQueue.Formatter = new XmlMessageFormatter(new Type[] { typeof(Commodity) });
                commodity = (Commodity)messageQueue.Receive().Body;
            }
            catch { }
            finally
            {
                messageQueue.Close();
            }
            return commodity;
        }

    }
}