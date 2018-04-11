using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace EquityTradingPlatformApi.Models
{
    public enum BlockStatus
    {
        Partial,
        Pending,
        Executed
    }

    public class Block
    {
        public int Id { get; set; }

        [Required]
        public BlockStatus BlockStatus { get; set; }

        public virtual User User { get; set; }

        // ishan bhadwa
        public int UserId;
    }
}