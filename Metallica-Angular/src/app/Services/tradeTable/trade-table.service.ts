import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { GlobalService } from "../GlobalService/global.service";
import { TradeTable } from "../../Models/trade-table";

@Injectable()
export class TradeTableService {

  constructor(private tradeService: GlobalService) { }
  trades : TradeTable[];

  ngOnInit() {
  }

  getTrades(url)
  {
    this.tradeService.GetMethod(url).subscribe
        (response => this.trades = response,
        error => console.error(error),
        () => { console.info(this.trades), this.resetTable() }
    );
  }

  resetTable()
  {

  }
}
