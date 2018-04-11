using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using EquityTradingPlatformApi.Models;

namespace EquityTradingPlatformApi.Controllers
{
    public class UsersController : ApiController
    {
        private ProjectContext db = new ProjectContext();

        // GET: api/Users
        public IQueryable<User> GetUsers()
        {
            return db.Users;
        }

        // GET: api/Users/5
        [ResponseType(typeof(User))]
        public IHttpActionResult GetUser(int id)
        {
            User user = db.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        // PUT: api/Users/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUser(int id, User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != user.Id)
            {
                return BadRequest();
            }

            db.Entry(user).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
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


        // Login Functionality for USERS
        [Route("api/Users/Login")]
        public IHttpActionResult PostLogin(LoginUser user)
        {
            foreach(User u in db.Users)
            {
                if (u.UserName == user.UserName && u.Password == user.Password)
                {
                    return Ok("User Found. Approved: " + u.Approved);
                }                    
            }

            return Ok(false);
        }

        // User Registration
        // POST: api/Users
        [ResponseType(typeof(User))]
        public IHttpActionResult PostUser(User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // By default user should'nt be approved
            user.Approved = false;

            foreach(User u in db.Users)
            {
                if (u.UserName == user.UserName)
                    return Ok("UserName already exists");

                if (u.EmployeeId == user.EmployeeId)
                    return Ok("EmployeeID already exists.");
            }

            try
            {
                db.Users.Add(user);
                db.SaveChanges();
            }
            catch (DbUpdateException e)
            {
                // If employee doesn't Exist.
                return Ok("Error. EmployeeId doesn't exist. " + e.Message);
            }
   
            //return CreatedAtRoute("DefaultApi", new { id = user.Id }, user);
            return Ok(user.Id);
        }

        // DELETE: api/Users/5
        [ResponseType(typeof(User))]
        public IHttpActionResult DeleteUser(int id)
        {
            User user = db.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }

            db.Users.Remove(user);
            db.SaveChanges();

            return Ok(user);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserExists(int id)
        {
            return db.Users.Count(e => e.Id == id) > 0;
        }
    }

    public class LoginUser
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}