using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using EquityTradingPlatformApi.Models;

namespace EquityTradingPlatformApi.Controllers
{
    public class StocksController : ApiController
    {
        private ProjectContext db = new ProjectContext();

        // GET: api/Stocks
        public IQueryable<Stocks> GetStocks()
        {
            return db.Stocks;
        }

        // GET: api/Stocks/5
        [ResponseType(typeof(Stocks))]
        public IHttpActionResult GetStocks(int id)
        {
            Stocks stocks = db.Stocks.Find(id);
            if (stocks == null)
            {
                return NotFound();
            }

            return Ok(stocks);
        }

        


    // PUT: api/Stocks/5
    [ResponseType(typeof(void))]
        public IHttpActionResult PutStocks(int id, Stocks stocks)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != stocks.Id)
            {
                return BadRequest();
            }

            db.Entry(stocks).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StocksExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }


        // POST: api/Stocks
        [ResponseType(typeof(Stocks))]
        public IHttpActionResult PostStocks(Stocks stocks)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Stocks.Add(stocks);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = stocks.Id }, stocks);
        }

        //Batch Add of Stocks
        [ActionName("PutList")]
        [ResponseType(typeof(void))]
        public IHttpActionResult StockList(ArrayList mydata)
        {
            try
            {
                foreach (var item in mydata)
                {
                    Stocks stock = (Stocks)Newtonsoft.Json.JsonConvert.DeserializeObject(item.ToString());
                    db.Stocks.Add(stock);

                }
                db.SaveChanges();
                return StatusCode(HttpStatusCode.NoContent);
            }
            catch(Exception)
            {
                return NotFound();
            }
        }


    // DELETE: api/Stocks/5
    [ResponseType(typeof(Stocks))]
        public IHttpActionResult DeleteStocks(int id)
        {
            Stocks stocks = db.Stocks.Find(id);
            if (stocks == null)
            {
                return NotFound();
            }

            db.Stocks.Remove(stocks);
            db.SaveChanges();

            return Ok(stocks);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool StocksExists(int id)
        {
            return db.Stocks.Count(e => e.Id == id) > 0;
        }
    }
}