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