using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Metallica.Models
{
    public enum Side
    {
        Buy,
        Sell
    }
    public enum Status
    {
        Open,
        Nominated
    }
    public class Trade
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [Required]
        public Side Side { get; set; }
        
        [Required]
        public Status Status { get; set; }

        public User user { get; set; }

        [Required]
        public int UserId { get; set; }

        public Commodity commodity { get; set; }

        [Required]
        public int CommodityId { get; set; }

        public CounterParty counterParty { get; set; }
        [Required]
        public int CounterPartyId { get; set; }

        public Location location { get; set; }

        [Required]
        public int LocationId { get; set; }

        [Required]
        [Range(0,double.MaxValue,ErrorMessage ="Out of Range")]
        public double Price { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [Required]
        [Range(0,int.MaxValue,ErrorMessage ="Out of Range")]
        public int Quantity { get; set; }



    }
}