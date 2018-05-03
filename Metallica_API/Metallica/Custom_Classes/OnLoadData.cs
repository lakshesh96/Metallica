using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Metallica.Custom_Classes
{
    public class OnLoadData
    {
        public RefData RefData { get; set; }
        public UserDetails UserDetails { get; set; }
        public OnLoadData()
        {

        }
        public OnLoadData(RefData refData,UserDetails userDetails)
        {
            this.RefData = refData;
            this.UserDetails = userDetails;
        }
    }
}