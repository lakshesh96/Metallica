using Metallica.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Metallica.Custom_Classes
{
    public class RefData
    {
        public List<Location> Locations { get; set; }
        public List<CounterParty> CounterParties { get; set; }
        public List<Commodity> Commodities { get; set; }
        public Guid UserId { get; set; }
        public string Name { get; set; }

        MetallicaContext db;
        public RefData(string username)
        {
            db = new MetallicaContext();
            this.Commodities = (from n in db.Commodities select n).ToList();
            this.CounterParties = (from n in db.CounterParties select n).ToList();
            this.Locations = (from n in db.Locations select n).ToList();
            this.UserId = (from n in db.Users where n.UserName == username select n.Id).FirstOrDefault();
            this.Name = (from n in db.Users where n.UserName == username select  n.FirstName + " " + n.LastName ).FirstOrDefault().ToString();
        }
       
    }
}