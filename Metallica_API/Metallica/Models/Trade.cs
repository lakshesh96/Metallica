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

        public virtual User User { get; set; }

        [Required]
        public Guid UserId { get; set; }

        public virtual Commodity Commodity { get; set; }

        [Required]
        public Guid CommodityId { get; set; }

        public virtual CounterParty CounterParty { get; set; }
        [Required]
        public Guid CounterPartyId { get; set; }

        public virtual Location Location { get; set; }

        [Required]
        public Guid LocationId { get; set; }

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