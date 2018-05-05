import { Injectable } from '@angular/core';
import {TradeTable} from '../../models/trade-table';
import {GlobalService} from '../GlobalService/global.service';
import { Router } from '@angular/router';

@Injectable()
export class TradeOperationService {

  TradeList : TradeTable[];
  constructor(private globalService: GlobalService,private router:Router) { }

  trade:TradeTable;
  url:string="/api/Trades";
  status:string;
  Add(trade:TradeTable){
    console.log("before Add service",trade);
    //console.log(userModel);
    this.globalService.PostMethod(trade,this.url).subscribe(
      response => this.status = response,
      error => console.error(error),
      () => {
        alert("Trade Created Successfully");
      }
    );
  }
}

