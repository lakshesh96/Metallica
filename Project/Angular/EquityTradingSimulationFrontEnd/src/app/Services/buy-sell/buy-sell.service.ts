import { Injectable } from '@angular/core';
import { Stocks } from "../../Models/stocks";
import { CurrentPosition } from "../../Models/current-position";
import { GlobalService } from "../../Services/global.service";

@Injectable()
export class BuySellService {

  private _baseUrl: string = "http://localhost:52705/api/Traders/Orders";

  constructor(private globalService:GlobalService) { }

  buyorder:Stocks;
  sellorder:CurrentPosition;

  GetBuyOrder(o:Stocks){
    this.buyorder = o;
  }

  GetSellOrder(o:CurrentPosition){
    this.sellorder = o;
  }

  AddBuyOrder(r:any)
  {
    /* alert("Traders received at my service");
    console.log(r+"traders");
    this.globalService.PostMethod(r,this._baseUrl).subscribe(
        response => response,
        error => console.error(error),
        //() => this.getTraders()
    );
    console.info(r); */

    return this.globalService.PostMethod(r,this._baseUrl);
  }


}
