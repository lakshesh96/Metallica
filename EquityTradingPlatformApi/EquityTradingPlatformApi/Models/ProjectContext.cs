using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace EquityTradingPlatformApi.Models
{
    public class ProjectContext:DbContext
    {
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Block> Blocks { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<User> Users { get; set; }
    }
}