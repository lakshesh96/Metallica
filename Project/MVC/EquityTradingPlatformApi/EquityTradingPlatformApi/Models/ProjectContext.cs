using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace EquityTradingPlatformApi.Models
{
    public class ProjectContext:DbContext
    {
        public ProjectContext():base("Equity_Trade_Azure")
        {
            this.Configuration.LazyLoadingEnabled = false;
        }
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Block> Blocks { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<CurrentPosition> CurrentPositions { get; set; }
        public DbSet<Stocks> Stocks { get; set; }
    }
}