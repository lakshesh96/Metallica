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
using Newtonsoft.Json.Linq;

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

            foreach (Stocks s in db.Stocks)
            {
                // Check if symbol already present
                if (s.Symbol == stocks.Symbol)
                {
                    return Ok(new { response = "false", error = "Symbol already exists."});
                }


                // Check if same name stock already present
                if (s.Name == stocks.Name)
                {
                    return Ok(new { response = "false", error = "Stock Name already exists." });
                }                    
            }

            db.Stocks.Add(stocks);
            db.SaveChanges();

            return Ok(new { response = "true"});

            //return CreatedAtRoute("DefaultApi", new { id = stocks.Id }, stocks);
            //return Ok(true);
        }

        //Batch Add of Stocks
        [Route("api/Stocks/PutList")]
        [ResponseType(typeof(void))]
        [HttpPost]
        public IHttpActionResult PostStockList(List<Stocks> mydata)
        {
            try
            {
                foreach (var item in mydata)
                {
                    //Stocks stock = (Stocks)Newtonsoft.Json.JsonConvert.DeserializeObject(item.ToString());
                    db.Stocks.Add(item);
                }
                db.SaveChanges();
                return Ok(true);
            }
            catch(Exception e)
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