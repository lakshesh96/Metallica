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
    public class BlocksController : ApiController
    {
        private ProjectContext db = new ProjectContext();

        // GET: api/Blocks
        public IQueryable<Block> GetBlocks()
        {
            return db.Blocks;
        }

        // GET 
        [Route("api/Trader/ExecuteBlock")]
        public IHttpActionResult GetBlockExecution(int blockId)
        {
            bool result = false;

            Exchange.Exchange exchange = new Exchange.Exchange(blockId);
            result = exchange.FillBlock();

            return Ok(result);
        }


        
        // TYPE OF BLOCKS FOR UserId and BlockStatus
        [Route("api/Trader/Block")]
        public IHttpActionResult GetTraderPendingBlocks(int userId, string blockStatus)
        {
            var blocks = from n in db.Blocks
                         where n.BlockStatus.ToString() == blockStatus
                         select n;

            return Ok(blocks.ToList());
        }




        // ADD NEW BLOCK FROM ORDER ID
        [Route("api/Trader/NewBlock")]
        public IHttpActionResult PostNewBlock(int orderId)
        {
            
            foreach (Order o in db.Orders)
            {                
                if (o.Id == orderId)
                {
                    Block block = new Block
                    {
                        BlockStatus = BlockStatus.Pending,
                        Side = o.OrderSide,
                        UserId = o.UserId,
                        StocksId = o.StocksId
                    };
                    db.Blocks.Add(block);
                    break;                  
                }
            }
            
            try
            {
                db.SaveChanges();
                return Ok(true);
            }
            catch (DbUpdateException e)
            {
                return Ok(false);
            }
            //return Ok(false);
        }



        // GET: api/Blocks/5
        [ResponseType(typeof(Block))]
        public IHttpActionResult GetBlock(int id)
        {
            Block block = db.Blocks.Find(id);
            if (block == null)
            {
                return NotFound();
            }

            return Ok(block);
        }





        // PUT: api/Blocks/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutBlock(int id, Block block)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != block.Id)
            {
                return BadRequest();
            }

            db.Entry(block).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BlockExists(id))
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

        // POST: api/Blocks
        [ResponseType(typeof(Block))]
        public IHttpActionResult PostBlock(Block block)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Blocks.Add(block);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = block.Id }, block);
        }

        // DELETE: api/Blocks/5
        [ResponseType(typeof(Block))]
        public IHttpActionResult DeleteBlock(int id)
        {
            Block block = db.Blocks.Find(id);
            if (block == null)
            {
                return NotFound();
            }

            db.Blocks.Remove(block);
            db.SaveChanges();

            return Ok(block);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BlockExists(int id)
        {
            return db.Blocks.Count(e => e.Id == id) > 0;
        }
    }
}