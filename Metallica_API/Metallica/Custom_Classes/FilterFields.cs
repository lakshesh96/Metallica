using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Metallica.Custom_Classes
{
    public enum FilterSide
    {
        Buy,
        Sell,
        Both
    }
    public class FilterFields
    {
        public string DateFrom { get; set; }
        public string DateTo { get; set; }
        public string Commodity { get; set; }
        public string Location { get; set; }
        public string CounterParty { get; set; }
        public FilterSide Side { get; set; }
    }
}