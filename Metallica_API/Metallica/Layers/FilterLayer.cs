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
        FilterCriteria filterCriteria;
        MetallicaContext db;

        public FilterLayer(FilterCriteria filterCriteria)
        {
            trades = new List<Trade>();
            db = new MetallicaContext();
            this.filterCriteria = filterCriteria;
        }

        public List<Trade> GetTrades()
        {
            FilterForSide();
            FilterForDate();
            FilterForCommodity();
            FilterForLocation();
            FilterForCounterParty();
            return trades;
        } //Get list of Filtered Trades

        private void FilterForSide()
        {
            if (filterCriteria.Buy == true && filterCriteria.Sell == true)
                trades = (from n in db.Trades select n).ToList();
            else if (filterCriteria.Buy == true)
                trades = (from n in db.Trades where n.Side == Side.Buy select n).ToList();
            else if (filterCriteria.Sell == true)
                trades = (from n in db.Trades where n.Side == Side.Sell select n).ToList();
            else
                trades = (from n in db.Trades select n).ToList();

        }   //Filter For Buy/Sell

        private void FilterForDate()
        {

            try
            {
                if (filterCriteria.DateTo != null)
                {
                    trades = trades.FindAll(a => a.Date <= DateTime.Parse(filterCriteria.DateTo));
                }
                if (filterCriteria.DateFrom != null)
                {
                    trades = trades.FindAll(a => a.Date >= DateTime.Parse(filterCriteria.DateFrom));
                }
            }
            catch(FormatException)
            {
                return;
            }
            catch (Exception)
            {
                return;
            }
        }   //Filter between range of dates

        private void FilterForCommodity()
        {
            try
            {
                if (filterCriteria.Commodity != null)
                    trades = trades.FindAll(a => a.CommodityId == Guid.Parse(filterCriteria.Commodity));
            }
            catch(FormatException)
            {
                return;
            }
            catch(Exception)
            {
                return;
            }
        }   //Filter for selected commodity

        private void FilterForLocation()
        {
            try
            {
                if (filterCriteria.Location != null)
                    trades = trades.FindAll(a => a.LocationId == Guid.Parse(filterCriteria.Location));
            }
            catch(FormatException)
            {
                return;
            }
            catch(Exception)
            {
                return;
            }
        }   //Filter for Location       

        private void FilterForCounterParty()
        {
            try
            {
                if (filterCriteria.CounterParty != null)
                    trades = trades.FindAll(a => a.CounterPartyId == Guid.Parse(filterCriteria.CounterParty));
            }
            catch(FormatException)
            {
                return;
            }
            catch(Exception)
            {
                return;
            }
        }   //Filter for Counter Parties
    }
}