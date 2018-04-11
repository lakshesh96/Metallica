using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace EquityTradingPlatformApi.Models
{
    public enum UserType
    {
        Trader,
        PortfolioManager,
        Both
    }
    public class User
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public bool Approved { get; set; }

        [Required]
        public string UserName { get; set; }

        public virtual Employee Employee { get; set; }

        [Required]
        public int EmployeeId { get; set; }

        [Required]
        public UserType Type { get; set; }
    }
}