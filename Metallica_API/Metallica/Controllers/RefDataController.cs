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
        [Route("api/RefData")]
        public  IHttpActionResult GetRefData()
        {
            RefData refData = new RefData();
            return Ok(refData);
        }

        [HttpPost]
        [Route("api/Filter")]
        public List<Trade> FilterTrades(FilterFields fields)
        {
            FilterLayer filterLayer = new FilterLayer(fields);
            return filterLayer.GetTrades();
        }
       
    }
}