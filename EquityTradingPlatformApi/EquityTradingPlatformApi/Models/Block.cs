using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace EquityTradingPlatformApi.Models
{
    public enum Status
    {
        Partial,
        Pending,
        Executed
    }

    public class Block
    {
        public int Id { get; set; }

        [Required]
        public Status Status { get; set; }

        public virtual User User { get; set; }

        public int UserId;
    }
}