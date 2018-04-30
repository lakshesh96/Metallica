using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Metallica.Models
{
    public class CounterParty
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [Required]
        [MinLength(2, ErrorMessage = "Please fill atleast 2 characters")]
        public string Name { get; set; }

        [Required]
        [MinLength(2, ErrorMessage = "Please fill atleast 2 characters")]
        public string Code { get; set; }
    }
}