using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using EquityTradingPlatformApi.Models;
using Newtonsoft.Json.Linq;

namespace EquityTradingPlatformApi.Controllers
{
    [EnableCors(origins:"*", headers:"*",methods:"*")]
    public class AdminController : ApiController
    {
        private ProjectContext db = new ProjectContext();

        // GET: api/Admin
        public IHttpActionResult GetAdmins()
        {
            return Ok("Not Authorized");
        }

        // GET: api/Admin/5
        [ResponseType(typeof(Admin))]
        public IHttpActionResult GetAdmin(int id)
        {
            //Admin admin = db.Admins.Find(id);
            //if (admin == null)
            //{
            //    return NotFound();
            //}

            //return Ok(admin);

            return Ok("Not authorized");
        }

        // PUT: api/Admin/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAdmin(int id, Admin admin)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            //if (id != admin.Id)
            //{
            //    return BadRequest();
            //}

            //db.Entry(admin).State = EntityState.Modified;

            //try
            //{
            //    db.SaveChanges();
            //}
            //catch (DbUpdateConcurrencyException)
            //{
            //    if (!AdminExists(id))
            //    {
            //        return NotFound();
            //    }
            //    else
            //    {
            //        throw;
            //    }
            //}

            //return StatusCode(HttpStatusCode.NoContent);
            return Ok("Not Authorized");
        }

        // POST: api/Admin
        [ResponseType(typeof(Admin))]
        public IHttpActionResult PostAdmin(Admin admin)
        {
            var result = JObject.Parse(@"{}");
            result["response"] = false;
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            if (admin.UserName == db.Admins.First().UserName && admin.Password == db.Admins.First().Password)
                result["response"] = true;

            // dummy authentication of admin
            //if (admin.UserName == "admin" && admin.Password == "password")
            //    return Ok(true);

            //return CreatedAtRoute("DefaultApi", new { id = admin.Id }, admin);
            return Ok(result);
        }

        // DELETE: api/Admin/5
        [ResponseType(typeof(Admin))]
        public IHttpActionResult DeleteAdmin(int id)
        {
            //Admin admin = db.Admins.Find(id);
            //if (admin == null)
            //{
            //    return NotFound();
            //}

            //db.Admins.Remove(admin);
            //db.SaveChanges();

            //return Ok(admin);
            return Ok("Not Authorized");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AdminExists(int id)
        {
            return db.Admins.Count(e => e.Id == id) > 0;
        }
    }
}