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
using EquityTradingPlatformApi.Models;

namespace EquityTradingPlatformApi.Controllers
{
    public class CurrentPositionsController : ApiController
    {
        private ProjectContext db = new ProjectContext();


        // GET CURRENT POSITION FOR USER
        [Route("api/Position/Approved")]
        [HttpGet]
        public IHttpActionResult GetCurrentPositionForUser(int userId)
        {
            var getUserOrders = from order in db.Orders
                                where (order.UserId == userId && (order.OrderStatus == OrderStatus.Executed || order.OrderStatus == OrderStatus.Partial))
                                select order.Id;
            




            //CurrentPosition currentPosition = db.CurrentPositions.Find(id);
            //if (currentPosition == null)
            //{
            //    return NotFound();
            //}

            //return Ok(currentPosition);
            return Ok(true);
        }





        // GET: api/CurrentPositions
        public IQueryable<CurrentPosition> GetCurrentPositions()
        {
            return db.CurrentPositions;
        }

        // GET: api/CurrentPositions/5
        [ResponseType(typeof(CurrentPosition))]
        public IHttpActionResult GetCurrentPosition(int id)
        {
            CurrentPosition currentPosition = db.CurrentPositions.Find(id);
            if (currentPosition == null)
            {
                return NotFound();
            }

            return Ok(currentPosition);
        }

        // PUT: api/CurrentPositions/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCurrentPosition(int id, CurrentPosition currentPosition)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != currentPosition.Id)
            {
                return BadRequest();
            }

            db.Entry(currentPosition).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CurrentPositionExists(id))
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

        // POST: api/CurrentPositions
        [ResponseType(typeof(CurrentPosition))]
        public IHttpActionResult PostCurrentPosition(CurrentPosition currentPosition)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CurrentPositions.Add(currentPosition);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = currentPosition.Id }, currentPosition);
        }

        // DELETE: api/CurrentPositions/5
        [ResponseType(typeof(CurrentPosition))]
        public IHttpActionResult DeleteCurrentPosition(int id)
        {
            CurrentPosition currentPosition = db.CurrentPositions.Find(id);
            if (currentPosition == null)
            {
                return NotFound();
            }

            db.CurrentPositions.Remove(currentPosition);
            db.SaveChanges();

            return Ok(currentPosition);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CurrentPositionExists(int id)
        {
            return db.CurrentPositions.Count(e => e.Id == id) > 0;
        }
    }
}