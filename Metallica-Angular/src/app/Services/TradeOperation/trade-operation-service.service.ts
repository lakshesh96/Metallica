import { Injectable } from '@angular/core';
import {TradeTable} from '../../models/trade-table';

@Injectable()
export class TradeOperationService {

  TradeList : TradeTable[];

  constructor() { }

  reg:TradeTable;

  Add(r:TradeTable){
    console.log(r);
  }
}
