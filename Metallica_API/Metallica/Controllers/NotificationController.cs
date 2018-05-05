using Metallica.Custom_Classes;
using Metallica.Models;
using Metallica.MQueue;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Metallica.Controllers
{
    [Authorize]
    public class NotificationController : ApiController
    {
        MetallicaContext db = new MetallicaContext();

        TradeMQueue tradeQueue = new TradeMQueue();
        TickerMQueue tickerQueue = new TickerMQueue();
        [Route("api/TradeNotification")]
        public IHttpActionResult GetTradeNotification()
        {
            TradeQueueMessage<Trade> genericTrade = tradeQueue.ReceiveMessage();

            genericTrade.Object = db.Trades.Find(genericTrade.Object.Id);

            return Ok(genericTrade);
        }

        [Route("api/TickerNotification")]
        public IHttpActionResult GetTickerNotification()
        {
            Commodity commodity = tickerQueue.ReceiveMessage();
            return Ok(commodity);
        }
    }
}
