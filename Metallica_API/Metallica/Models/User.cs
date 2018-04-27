﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Metallica.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        public string UserName { get; set; }
    }
}