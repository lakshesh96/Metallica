using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace EquityTradingPlatformApi.Models
{
    public class Stocks
    {
        public int Id { get; set; }

        [Required]
        public string Symbol { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public int CurrentPrice { get; set; }
        [Required]
        public int VolumeAvailable { get; set; }



    }
}