using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace EquityTradingPlatformApi.Models
{
    public class CurrentPosition
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public int UserId { get; set; }
        [Required]
        public int StockId { get; set; }
        [Required]
        public DateTime Date { get; set; }
        [Required]
        public int Rate { get; set; }
        [Required]
        public int Quantity { get; set; }


    }
}