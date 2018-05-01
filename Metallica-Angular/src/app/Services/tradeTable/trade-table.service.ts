import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { GlobalService } from "../GlobalService/global.service";
import { TradeTable } from "../../Models/trade-table";

@Injectable()
export class TradeTableService {

  constructor(private globalService: GlobalService) { }
  trades : TradeTable[];
  url : string = "/api/trades";
  ngOnInit() {
  }

  getTrades()
  {
    return this.globalService.GetMethod(this.url);
  }

  resetTable()
  {

  }
}
