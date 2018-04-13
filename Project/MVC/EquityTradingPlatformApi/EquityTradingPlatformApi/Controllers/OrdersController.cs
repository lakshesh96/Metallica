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
    public class OrdersController : ApiController
    {
        private ProjectContext db = new ProjectContext();


        // GET: api/Orders
        public IQueryable<Order> GetOrders()
        {
            return db.Orders;
        }



        // GET PENDING ORDER FOR USERID
        // GET: api/Trader/PendingOrders
        [Route("api/Trader/PendingOrders")]
        [ResponseType(typeof(IQueryable<Order>))]
        public IHttpActionResult GetPendingOrders(int userId)
        {
            if (db.Users.Find(userId) == null)
                return Ok("UserId not found");
            else
            {
                var pendingOrders = from n in db.Orders
                                    where (n.UserId == userId && n.OrderStatus == OrderStatus.Pending && n.BlockId == null)
                                    select n;
                foreach (Order o in pendingOrders)
                {
                    foreach (Stocks s in db.Stocks)
                    {
                        if (s.Id == o.Id)
                        {

                        }
                    }
                }
                
                return Ok(pendingOrders.ToList());
            }

            //return null;
        }
        // GET: api/Orders/5
        [ResponseType(typeof(Order))]
        public IHttpActionResult GetOrder(int id)
        {
            Order order = db.Orders.Find(id);
            if (order == null)
            {
                return NotFound();
            }

            return Ok(order);
        }



        // PUT: api/Orders/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutOrder(int id, Order order)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != order.Id)
            {
                return BadRequest();
            }

            db.Entry(order).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderExists(id))
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


        // ADD ORDER FOR TRADER
        // POST: api/Trader/Orders
        [Route("api/Trader/Orders")]
        [ResponseType(typeof(Order))]
        public IHttpActionResult PostTraderOrder(Order order)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            order.DateAdded = System.DateTime.Now;
            order.OrderStatus = OrderStatus.Pending;

            db.Orders.Add(order);
            try
            {
                db.SaveChanges();
                return Ok(order);
            } catch(DbUpdateException e)
            {
                return Ok("UserId or StockId not found");
            }
        }


        // ADD ORDER FOR PM
        // POST: api/PM/Orders
        [Route("api/PM/Orders")]
        [ResponseType(typeof(Order))]
        public IHttpActionResult PostPMOrder(Order order)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}
            bool PMIdFound = false;            

            foreach(User u in db.Users)
            {
                if(u.Id == order.PMId && (u.Type == UserType.PortfolioManager || u.Type == UserType.Both))
                {
                    PMIdFound = true;
                }
            }

            if (!PMIdFound)
            {
                return Ok("Incorrect PM Id");
            }

            order.DateAdded = System.DateTime.Now;
            order.OrderStatus = OrderStatus.Pending;

            db.Orders.Add(order);
            try
            {
                db.SaveChanges();
                return Ok(order);
            }
            catch (DbUpdateException e)
            {
                return Ok("UserId or StockId not found");
            }
        }



        // DELETE: api/Orders/5
        [ResponseType(typeof(Order))]
        public IHttpActionResult DeleteOrder(int id)
        {
            Order order = db.Orders.Find(id);
            if (order == null)
            {
                return NotFound();
            }

            db.Orders.Remove(order);
            db.SaveChanges();

            return Ok(order);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool OrderExists(int id)
        {
            return db.Orders.Count(e => e.Id == id) > 0;
        }
    }
}