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
        //[Required]
        //public int UserId { get; set; }
        [Required]
        public DateTime Date { get; set; }
        [Required]
        public double PriceExecuted { get; set; }
        
        [Required]
        public int OrderId { get; set; }

        [Required]
        public int VolumeExecuted { get; set; }

        public virtual Order Order { get; set; }
    }
}