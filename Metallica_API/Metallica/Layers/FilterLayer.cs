using Metallica.Custom_Classes;
using Metallica.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Metallica.Layers
{
    public class FilterLayer
    {
        List<Trade> trades;
        FilterFields fields;
        MetallicaContext db;

        public FilterLayer(FilterFields filterFields)
        {
            trades = new List<Trade>();
            db = new MetallicaContext();
            this.fields = filterFields;
        }

        public List<Trade> GetTrades()
        {
            FilterForSide();
            FilterForDate();
            FilterForCommodity();
            FilterForLocation();
            FilterForCounterParty();
            return trades;
        }

        public void FilterForSide()
        {
            if (fields.Side == FilterSide.Buy)
            {
                trades = (from n in db.Trades where n.Side == Side.Buy select n).ToList();
            }
            else if (fields.Side == FilterSide.Sell)
            {
                trades = (from n in db.Trades where n.Side == Side.Sell select n).ToList();
            }
            else
            {
                trades = (from n in db.Trades select n).ToList();
            }
        }

        public void FilterForDate()
        {
            if(fields.DateTo != null)
            {
                trades = trades.FindAll(a => a.Date <= DateTime.Parse(fields.DateTo));
            }
            if(fields.DateFrom !=null)
            {
                trades = trades.FindAll(a => a.Date >= DateTime.Parse(fields.DateFrom));
            }
        }

        public void FilterForCommodity()
        {
            if(fields.Commodity !=null)
            trades = trades.FindAll(a => a.CommodityId == Guid.Parse(fields.Commodity));
        }

        public void FilterForLocation()
        {
            if (fields.Location != null)
                trades = trades.FindAll(a => a.LocationId == Guid.Parse(fields.Location));
        }

        public void FilterForCounterParty()
        {
            if (fields.CounterParty != null)
                trades = trades.FindAll(a => a.CounterPartyId == Guid.Parse(fields.CounterParty));
        }
    }
}