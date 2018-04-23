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
            return db.Blocks; ;
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
            if(blockStatus.Equals("PartialAndPending"))
            {
                var blocks = from n in db.Blocks
                             join m in db.Orders on n.Id equals m.BlockId
                             where (n.BlockStatus == BlockStatus.Partial
                             ||
                             n.BlockStatus == BlockStatus.Pending)
                             &
                             m.UserId == userId
                             select n;
                return Ok(blocks.ToList());
            }
            //var userblocks = from n in db.
            var userblocks = from n in db.Blocks
                             join m in db.Orders on n.Id equals m.BlockId
                             where n.BlockStatus.ToString() == blockStatus & m.UserId == userId
                             select n;
            return Ok(userblocks.ToList());
        }


        [Route("api/Trader/AddToBlock")]
        public IHttpActionResult AddtoBlocks(int orderId, int blockId)
        {
            var order = db.Orders.Find(orderId);
            var block = db.Blocks.Find(blockId);
            if (order.OrderSide == block.Side && order.OrderType == block.Type && order.StocksId == block.StocksId)
            {
                order.BlockId = blockId;
                try
                {
                    db.SaveChanges();
                    return Ok(true);
                }
                catch (Exception)
                {
                    return Ok(false);
                }
            }
            else
                return BadRequest();

        }



        // ADD NEW BLOCK FROM ORDER ID
        [Route("api/Trader/NewBlock")]
        public IHttpActionResult PostNewBlock(int orderId)
        {
                Order order= db.Orders.Find(orderId);
            Block block = new Block
            {
                BlockStatus = BlockStatus.Pending,
                Side = order.OrderSide,
                UserId = order.UserId,
                StocksId = order.StocksId
            };
            
                /*
                if (o.Id == orderId)
                {
                    block = new Block 
                    {
                        BlockStatus = BlockStatus.Pending,
                        Side = o.OrderSide,
                        UserId = o.UserId,
                        StocksId = o.StocksId
                    };
                    db.Blocks.Add(block);
                    
                   
                    
                }
            //}*/
            try
            {
                db.Blocks.Add(block);
                db.SaveChanges();
                order.BlockId = block.Id;
                db.SaveChanges();

                return Ok(true);
            }
            catch (DbUpdateException e)
            {
                return Ok(false);
            }
            return Ok(false);
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