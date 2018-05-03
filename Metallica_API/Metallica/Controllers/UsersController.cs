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
    public class UsersController : ApiController
    {
        private MetallicaContext db = new MetallicaContext();

       
        // POST: api/Users
        [ResponseType(typeof(User))]
        public IHttpActionResult PostUser(User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                db.Users.Add(user);
                db.SaveChanges();
            }
            catch (Exception e)
            {
                return BadRequest(e.ToString());
            }

            return CreatedAtRoute("DefaultApi", new { id = user.Id }, user);
        }
    }
}