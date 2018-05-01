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

        MetallicaContext db;
        public RefData()
        {
            db = new MetallicaContext();
            this.Commodities = (from n in db.Commodities select n).ToList();
            this.CounterParties = (from n in db.CounterParties select n).ToList();
            this.Locations = (from n in db.Locations select n).ToList();
        }
       
    }
}