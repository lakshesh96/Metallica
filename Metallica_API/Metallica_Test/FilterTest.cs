using System;
using System.Collections.Generic;
using Metallica.Custom_Classes;
using Metallica.Layers;
using Metallica.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Metallica_Test
{
    [TestClass]
    public class FilterTest
    {
        [TestMethod]
        public void Test_Filter()
        {
            FilterFields testFeilds = new FilterFields();
            testFeilds.DateFrom = "2018-04-16";
            testFeilds.DateTo = "2018-04-16";
            testFeilds.Commodity = "Ishan";
            testFeilds.Location = "N";
            testFeilds.CounterParty = "Aayush";
            testFeilds.Buy = true;
            testFeilds.Sell = false;
            //comment
            FilterLayer filters = new FilterLayer(testFeilds);

            List<Trade> actualList = filters.GetTrades();
            Console.WriteLine(actualList);
            Assert.IsNotNull(actualList);
        }
    }
}
