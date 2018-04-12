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

        [Required]
        public int UserId { get; set; }
        public virtual User User { get; set; }

        public Side Side { get; set; }

        public OrderType Type { get; set; }

        public int StocksId { get; set; }
        public virtual Stocks Stocks { get; set; }
    }
}