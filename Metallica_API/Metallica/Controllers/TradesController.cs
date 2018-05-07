using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Metallica.Layers;
using Metallica.Models;
using Metallica.MQueue;

namespace Metallica.Controllers
{
    [Authorize]
    public class TradesController : ApiController
    {
        private MetallicaContext db = new MetallicaContext();
        private BusinessLayer businessLayer = new BusinessLayer();

        // PUT: api/Trades/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTrade(Guid id, Trade trade)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != trade.Id)
            {
                return BadRequest();
            }

            db.Entry(trade).State = EntityState.Modified;

            try
            {
                trade.Price = db.Commodities.Find(trade.CommodityId).CurrentPrice;
                db.SaveChanges();
                businessLayer.UpdateNotification((trade));
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TradeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return StatusCode(HttpStatusCode.NoContent);
        } //Update a trade

      
        // POST: api/Trades
        [ResponseType(typeof(Trade))]
        public IHttpActionResult PostTrade(Trade trade)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            trade.Date = System.DateTime.Now;
            trade.Price = db.Commodities.Find(trade.CommodityId).CurrentPrice;

            try { 
                db.Trades.Add(trade);
                db.SaveChanges();
                businessLayer.AddNotification((trade));
            }
            catch (DbUpdateException e)
            {
                return BadRequest(e.ToString());
            }
            catch (Exception e)
            {
                return BadRequest(e.ToString());
            }
            return CreatedAtRoute("DefaultApi", new { id = trade.Id }, trade);
        }   //Add a trade
        
        // DELETE: api/Trades/5
        [HttpPost]
        [Route("api/Trades/Remove")]
        [ResponseType(typeof(Trade))] 
        public IHttpActionResult RemoveTrade(Trade trade)
        {
            Guid id = (from n in db.Trades where n.Id == trade.Id select n.Id).FirstOrDefault();
            if (trade == null||id==null)
            {
                return NotFound();
            }

            try
            {
                businessLayer.DeleteNotification((trade));
                trade = db.Trades.Find(id);
                db.Trades.Remove(trade);
                db.SaveChanges();
            }
            catch (DbUpdateException e)
            {
                return BadRequest(e.ToString());
            }
            catch (Exception e)
            {
                return BadRequest(e.ToString());
            }
            return Ok(trade);
        } //Remove a trade
       
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TradeExists(Guid id)
        {
            return db.Trades.Count(e => e.Id == id) > 0;
        }
    }
}