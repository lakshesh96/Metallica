import { Injectable } from '@angular/core';
import {TradeTable} from '../../models/trade-table';
import {GlobalService} from '../GlobalService/global.service';

@Injectable()
export class TradeOperationService {

  TradeList : TradeTable[];

  constructor(private globalService: GlobalService) { }

  trade:TradeTable;
  url:string="/api/Trades";
  status:string;
  Add(trade:TradeTable){
    console.log(trade);
    console.log("before service");
    //console.log(userModel);
    this.globalService.PostMethod(trade,this.url).subscribe(
      response => this.status = response,
      error => console.error(error),
      () => {
        //console.log(console.log(this.status + "Hello"))
        alert("Trade Created Successfully");
      }
    );
  }

  }

