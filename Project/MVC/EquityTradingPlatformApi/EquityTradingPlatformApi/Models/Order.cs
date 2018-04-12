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

    public enum OrderStatus
    {
        Executed,
        Partial,
        Pending
    }
    
    public class Order
    {
        public int Id { get; set; }

        [Required]
        public OrderType OrderType { get; set; }

        [Required]
        public Side OrderSide { get; set; }

        [Required]
        public int StocksId { get; set; }
        public virtual Stocks Stocks { get; set; }

        [Required]
        public int Quantity { get; set; }

        [Required]
        public int UserId;
        public virtual User User { get; set; }

        public int PMId;

        [Required]
        public OrderStatus OrderStatus { get; set; }


        [Required]
        public double LimitPrice { get; set; }

        [Required]
        public double StopPrice { get; set; }

        [Required]
        public DateTime DateAdded { get; set; }

        public int BlockId;

        public virtual IEnumerable<CurrentPosition> Positions { get; set; }

    }
}