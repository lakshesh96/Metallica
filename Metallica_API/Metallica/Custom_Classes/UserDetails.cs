using Metallica.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Metallica.Custom_Classes
{
    public class UserDetails
    { 
        public string Name { get; set; }
        public Guid UserId { get; set; }

        public UserDetails(string username)
        {
            MetallicaContext db = new MetallicaContext();
            this.UserId = (from n in db.Users where n.UserName == username select n.Id).FirstOrDefault();
            this.Name = (from n in db.Users where n.UserName == username select n.FirstName + " " + n.LastName).FirstOrDefault().ToString();
        }
    }
}