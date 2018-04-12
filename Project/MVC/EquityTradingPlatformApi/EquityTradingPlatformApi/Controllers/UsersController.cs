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
using Newtonsoft.Json.Linq;

namespace EquityTradingPlatformApi.Controllers
{
    public class UsersController : ApiController
    {
        private ProjectContext db = new ProjectContext();


        // GET ALL USERS
        // GET: api/Users
        public IQueryable<User> GetUsers()
        {
            return db.Users;
        }


        /* GET SPECIFIC USER BY ID
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
        */


        // GET APPROVED TRADERS
        // GET: api/Trader/Approved
        [HttpGet]
        [Route("api/Trader/Approved")]
        [ResponseType(typeof(User))]
        public IHttpActionResult GetApprovedTraders()
        {
            var approvedTraders = from user in db.Users
                                  where user.Approved == true && (user.Type == UserType.Trader || user.Type == UserType.Both)
                                  select user;
            return Ok(approvedTraders);
        }


        // GET UNAPPROVED TRADERS
        // GET: api/Trader/Unapproved
        [HttpGet]
        [Route("api/Trader/Unapproved")]
        [ResponseType(typeof(User))]
        public IHttpActionResult GetUnapprovedTraders()
        {
            var approvedTraders = from user in db.Users
                                  where user.Approved == false && (user.Type == UserType.Trader || user.Type == UserType.Both)
                                  select user;
            return Ok(approvedTraders);
        }


        // GET APPROVED PM
        // GET: api/PM/Approved
        [HttpGet]
        [Route("api/PM/Approved")]
        [ResponseType(typeof(User))]
        public IHttpActionResult GetApprovedPM()
        {
            var approvedTraders = from user in db.Users
                                  where user.Approved == true && (user.Type == UserType.PortfolioManager || user.Type == UserType.Both)
                                  select user;
            return Ok(approvedTraders);
        }


        // GET UNAPPROVED PM
        // GET: api/PM/Unapproved
        [HttpGet]
        [Route("api/PM/Unapproved")]
        [ResponseType(typeof(User))]
        public IHttpActionResult GetUnapprovedPM()
        {
            var approvedTraders = from user in db.Users
                                  where user.Approved == false && (user.Type == UserType.PortfolioManager || user.Type == UserType.Both)
                                  select user;
            return Ok(approvedTraders);
        }


        /* EDIT USER FUNCTIONALITY
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
        */


        // LOGIN FOR TRADERS AND PM
        // Post: api/Users/Login
        [Route("api/Users/Login")]
        [ResponseType(typeof(void))]
        [HttpPost]
        public IHttpActionResult PostLogin(LoginUser user)
        {
            var result = JObject.Parse(@"{}");
            result["response"] = false;

            foreach (User u in db.Users)
            {
                if (u.UserName == user.UserName && u.Password == user.Password)
                {
                    if (u.Type == user.Type)
                    {
                        result["response"] = true;
                        result["id"] = u.Id;
                        result["type"] = u.Type.ToString();
                        result["error"] = "";
                    } 
                    else
                    {
                        result["response"] = false;
                        result["type"] = "";
                        result["error"] = "Incorrect UserType";
                    }
                    return Ok(result);
                }                    
            }
            result["error"] = "Incorrect UserName or Password";
            return Ok(result);
        }



        // BATCH ADD USERS
        // Post: api/Users/PutList
        [Route("api/Users/PutList")]
        [ResponseType(typeof(void))]
        [HttpPost]
        public IHttpActionResult PostUserList(List<User> mydata)
        {
            try
            {
                foreach (var item in mydata)
                {
                    db.Users.Add(item);
                }
                db.SaveChanges();
                return StatusCode(HttpStatusCode.NoContent);
            }
            catch (Exception e)
            {
                return NotFound();
            }
        }



        // USER REGISTRATION 
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



        /* DELETE USER FUNCTIONALITY
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
        */



        // APPROVE USERS (TOGGLE)
        // POST: api/Users/Approve
        [HttpPost]
        [Route("api/Users/Approve")]
        [ResponseType(typeof(bool))]
        public IHttpActionResult ApproveUser(int id)
        {
            bool result = false;

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                foreach(User u in db.Users)
                {
                    if (u.Id == id)
                    {
                        u.Approved = !u.Approved;
                        result = true;
                    }
                }
                db.SaveChanges();
                return Ok(result);
            }
            catch (DbUpdateConcurrencyException)
            {
                return Ok(false);
            }
        }




        // Extra Functions
        
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
        public UserType Type { get; set; }
    }
}