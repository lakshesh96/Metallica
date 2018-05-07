using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Metallica.Custom_Classes;
using Metallica.Layers;
using Metallica.Models;

namespace Metallica.Controllers
{
    [Authorize]
    public class RefDataController : ApiController
    {
        private MetallicaContext db = new MetallicaContext();

        // GET: api/RefData
        [Route("api/RefData/{username}")]
        public  IHttpActionResult GetOnLoadData(string username) // Get On Load Data (Reference Data and User Data)
        {
            RefData refData = new RefData();
            UserDetails userDetails = new UserDetails(username);
            OnLoadData onLoadData = new OnLoadData(refData, userDetails);
            return Ok(onLoadData);
        }

        [HttpPost]
        [Route("api/Filter")]
        public List<Trade> FilterTrades(FilterCriteria criteria) //Filter Trades based on criteria recieved
        {
            FilterLayer filterLayer = new FilterLayer(criteria);
            return filterLayer.GetTrades();
        }
       
    }
}