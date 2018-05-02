import { Injectable } from '@angular/core';
import {TradeTable} from '../../models/trade-table';

@Injectable()
export class TradeOperationService {

  TradeList : TradeTable[];

  constructor() { }

  insert(p) {
      this.TradeList.push(p);
  }

  remove(p){
    this.TradeList.splice(p,1);
  }
}
