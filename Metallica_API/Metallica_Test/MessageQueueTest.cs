using System;
using Metallica.Custom_Classes;
using Metallica.Models;
using Metallica.MQueue;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Metallica_Test
{
    [TestClass]
    public class MessageQueueTest
    {
        [TestMethod]
        public void Test_SendMessage()
        {
            Trade trade = new Trade();
            Guid guid = Guid.NewGuid();

            trade.Id = new Guid();
            trade.Side = 0;
            trade.Status = 0;
            trade.UserId = new Guid();
            trade.CommodityId = new Guid();
            trade.LocationId = new Guid();
            trade.Price = 1000;
            trade.Quantity = 20;

            TradeQueueMessage<Trade> tradeQueueMessage = new TradeQueueMessage<Trade>("added", trade);

            TradeMQueue tradeMQueue = new TradeMQueue();
            Boolean actual = tradeMQueue.SendMessage(tradeQueueMessage);

            Assert.IsTrue(actual);


        }
    }
}
