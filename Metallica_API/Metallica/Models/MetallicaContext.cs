﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Metallica.Models
{
    public class MetallicaContext:DbContext //Context Class
    {
        public MetallicaContext():base("Metallica"){} //Base Constructor
        public DbSet<Commodity> Commodities { get; set; }
        public DbSet<CounterParty> CounterParties { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Trade> Trades { get; set; }
    }
}