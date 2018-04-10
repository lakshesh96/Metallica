using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace EquityTradingPlatformApi.Models
{
    public enum OrderType
    {
        Market,
        Limit,
        Stop,
        StopLimit
    }

    public enum Side
    {
        Buy,
        Sell
    }
    
    public class Order
    {
        public int Id { get; set; }

        [Required]
        public OrderType OrderType { get; set; }

        [Required]
        public Side OrderSide { get; set; }

        [Required]
        public string StockSymbol { get; set; }

        [Required]
        public int Quantity { get; set; }

        public virtual User User { get; set; }

        [Required]
        public int UserId;

    }
}