import { Component, OnInit } from '@angular/core';
import {Stocks} from '../../Models/stocks';
import{StocksService} from '../../Services/StocksList/stocks.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit 
{
  StockShow:Stocks[]

  constructor(private SS:StocksService) { 
    // this.StockShow=this.SS.StocksList;
    // console.log(this.StockShow);
  }
  getStocks(){
    this.StockShow=this.SS.StocksList;
    console.log(this.StockShow);
  }

  ngOnInit() 
  {   
    //this.StockShow=this.SS.StocksList;
  }
  sort_stock_Name_ascending()
  {
   this.StockShow.sort((a, b) => a.Name.localeCompare(b.Name));
  }
  sort_stock_Name_descending()
  {
    this.StockShow.sort((a, b) => a.Name.localeCompare(b.Name));
    this.StockShow.reverse();
  }
  sort_CurPrice_ascending()
  {
   this.StockShow.sort(function(obj1, obj2)
   {
     return obj1.CurrentPrice-obj2.CurrentPrice;
   })
  }

  sort_CurPrice_descending()
  {
    this.StockShow.sort(function(obj1, obj2)
    {
      return obj2.CurrentPrice-obj1.CurrentPrice;
    })
  }
  Search(Name)
  {
    console.log(Name);
    this.StockShow = this.SS.Search(Name);
  }
  
}


