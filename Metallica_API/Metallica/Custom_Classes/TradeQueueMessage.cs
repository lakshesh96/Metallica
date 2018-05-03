using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Metallica.Custom_Classes
{
    public class TradeQueueMessage<Type>
    {
        public string Text;
        public Type Object;

        public TradeQueueMessage() { }

        public TradeQueueMessage(string text,Type Object)
        {
            this.Text = text;
            this.Object = Object;
        }
    }
}