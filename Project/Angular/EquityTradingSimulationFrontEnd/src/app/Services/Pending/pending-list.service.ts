import { Injectable } from '@angular/core';
import{PendingStocks} from '../../Models/pending-stocks'

@Injectable()
export class PendingListService 
{
  ListPending:PendingStocks[]=[];

  constructor()
  {
    this.ListPending=
    [
      new PendingStocks("Aditya","Tata Consultancy Service","TCS",1000,3058,2981,3058000,"Buy"),
      new PendingStocks("Aditya","State Bank of India","SBI",432,254,240,674342,"Buy"),
      new PendingStocks("Aditya","Punjab National Bank","PNB",5600,3058,97,34242,"Sell"),
      new PendingStocks("Aditya","Reliance Industries","RIL",2560,3058,941,3045300,"Buy"),
      new PendingStocks("Aditya","Glenmark Pharma","Glenmark",3200,3058,565,268963,"Sell"),
      new PendingStocks("Aditya","Infosys","Infosys",2900,3058,1411,909765,"Buy"),
    ]
  }

}
