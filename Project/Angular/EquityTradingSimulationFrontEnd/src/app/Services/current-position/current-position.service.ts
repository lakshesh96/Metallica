import { Injectable } from '@angular/core';
import{CurrentPosition} from "../../Models/current-position"
import {GlobalService} from '../../Services/global.service';
import{Stocks} from "../../Models/stocks"

@Injectable()
export class CurrentPositionService {

  CurrentS : CurrentPosition[];

  url = "http://localhost:52705/api/Position/Approved?userId=";
 
  constructor(private globalService:GlobalService) {

  this.GetPosition();
  }

  GetPosition(){
    let userid = sessionStorage.getItem("UserId");
    /* this.globalService.GetWithId(this.url,userid).subscribe(
      response => this.CurrentS = response,
      error => console.error(error),
      () => console.log(this.CurrentS)
    ); */
    console.log(this.url);
    console.log(userid);
    return this.globalService.GetMethod(this.url+userid);
  }

/*   GetOrderDetails(id: number) {
    this.globalService.GetWithId(this.urlOrder, id).subscribe(
      response => {return response;},
      error => console.error(error),
      () => console.log(this.CurrentS)
    );

  }
  GetStockDetails(id: number) {
    this.globalService.GetWithId(this.urlStocks, id).subscribe(
      response => {return response;},
      error => console.error(error),
      () => console.log(this.CurrentS)
    );
  } */

}