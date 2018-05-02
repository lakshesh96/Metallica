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
            if (fields.Buy == true && fields.Sell == true)
                trades = (from n in db.Trades select n).ToList();
            else if (fields.Buy == true)
                trades = (from n in db.Trades where n.Side == Side.Buy select n).ToList();
            else if (fields.Sell == true)
                trades = (from n in db.Trades where n.Side == Side.Sell select n).ToList();
            else
                trades = (from n in db.Trades select n).ToList();

        }

        public void FilterForDate()
        {

            try
            {
                if (fields.DateTo != null)
                {
                    trades = trades.FindAll(a => a.Date <= DateTime.Parse(fields.DateTo));
                }
                if (fields.DateFrom != null)
                {
                    trades = trades.FindAll(a => a.Date >= DateTime.Parse(fields.DateFrom));
                }
            }
            catch (Exception)
            {
                return;
            }
        }

        public void FilterForCommodity()
        {
            try
            {
                if (fields.Commodity != null)
                    trades = trades.FindAll(a => a.CommodityId == Guid.Parse(fields.Commodity));
            }
            catch(Exception)
            {
                return;
            }
        }

        public void FilterForLocation()
        {
            try
            {
                if (fields.Location != null)
                    trades = trades.FindAll(a => a.LocationId == Guid.Parse(fields.Location));
            }
            catch(Exception)
            {
                return;
            }
        }

        public void FilterForCounterParty()
        {
            try
            {
                if (fields.CounterParty != null)
                    trades = trades.FindAll(a => a.CounterPartyId == Guid.Parse(fields.CounterParty));
            }
            catch(Exception)
            {
                return;
            }
        }
    }
}