import { Injectable, OnInit } from '@angular/core';
import{Stocks} from '../../Models/stocks';
import{GlobalService} from '../global.service';

@Injectable()
export class StocksService implements OnInit
{
  //StocksList:Stocks[]=[];
  StocksList:any[];
  url = "http://localhost:52705/api/Stocks";

  ngOnInit(){
    console.log("2.");
    //this.getStocks();
  }

  constructor(private globalService:GlobalService)
  {
    // this.StocksList=
    // [
    //   new Stocks("Infosys","Infosys",991),
    //   new Stocks("Tata Consultancy Services","TCS",3058),
    //   new Stocks("Reliance Industries","RIL",1465),
    //   new Stocks("Punjab National Bank","PNB",99),
    //   new Stocks("State Bank of India","SBI",254)
    // ]
    this.GetStocks();
  }
  Search(name)
  {
    return this.StocksList.filter(a=>(a.Name.toLowerCase().search(name.toLowerCase())!=-1));
  }

  GetStocks(){
    /* this.globalService.GetMethod(this.url).subscribe(
      response => this.StocksList = response,
      error => console.error(error),
      () => console.log()
    ); */

    return this.globalService.GetMethod(this.url);
  }

}
