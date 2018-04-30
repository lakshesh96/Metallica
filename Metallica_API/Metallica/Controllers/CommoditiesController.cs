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
using Metallica.Models;

namespace Metallica.Controllers
{
    public class CommoditiesController : ApiController
    {
        private MetallicaContext db = new MetallicaContext();

        // GET: api/Commodities
        public IQueryable<Commodity> GetCommodities()
        {
            return db.Commodities;
        }

        // GET: api/Commodities/5
        [ResponseType(typeof(Commodity))]
        public IHttpActionResult GetCommodity(Guid id)
        {
            Commodity commodity = db.Commodities.Find(id);
            if (commodity == null)
            {
                return NotFound();
            }

            return Ok(commodity);
        }

        // PUT: api/Commodities/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCommodity(Guid id, Commodity commodity)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != commodity.Id)
            {
                return BadRequest();
            }

            db.Entry(commodity).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CommodityExists(id))
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

        // POST: api/Commodities
        [ResponseType(typeof(Commodity))]
        public IHttpActionResult PostCommodity(Commodity commodity)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Commodities.Add(commodity);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = commodity.Id }, commodity);
        }

        // DELETE: api/Commodities/5
        [ResponseType(typeof(Commodity))]
        public IHttpActionResult DeleteCommodity(Guid id)
        {
            Commodity commodity = db.Commodities.Find(id);
            if (commodity == null)
            {
                return NotFound();
            }

            db.Commodities.Remove(commodity);
            db.SaveChanges();

            return Ok(commodity);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CommodityExists(Guid id)
        {
            return db.Commodities.Count(e => e.Id == id) > 0;
        }
    }
}