using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace EquityTradingPlatformApi.Models
{
    public class TransactionHistory
    {

        public int Id { get; set; }

        public User User { get; set; }

        [Required]
        public int UserId { get; set; }

        [Required]
        [Range(0,int.MaxValue)]
        public int Quantity { get; set; }

        [Required]
        [Range(0,double.MaxValue)]
        public double BuyPrice { get; set; }

        [Required]
        [Range(0,double.MaxValue)]
        public double SellPrice { get; set; }

        public Stocks stock { get; set; }

        [Required]
        public int StockId { get; set; }
    }
}