import { Injectable } from '@angular/core';
import {TradeForm} from '../../models/trade-form'

@Injectable()
export class TradeOperationService {

  TradeList : TradeForm[];

  constructor() {
    this.TradeList = [
        new TradeForm(10,"Gold",true,"Australia",2100,1,"India"),
        new TradeForm(12,"Copper",false,"US",1200,0,"India"),
        new TradeForm(14,"Iron",true,"UK",200,1,"India")
    ];
  }

  insert(p) {
      this.TradeList.push(p);
  }

  remove(p){
    this.TradeList.splice(p,1);
  }
}
