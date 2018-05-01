using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Metallica.Custom_Classes
{
    public class GenericTrade<Type>
    {
        public string Text;
        public Type Object;

        public GenericTrade() { }

        public GenericTrade(string text,Type Object)
        {
            this.Text = text;
            this.Object = Object;
        }
    }
}