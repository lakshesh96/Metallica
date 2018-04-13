import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; //
import 'rxjs/add/operator/catch';
import {GlobalService} from '../../Services/global.service';

@Injectable()
export class PendingListService 
{
  private _baseUrl: string = "http://localhost:52705/api/Trader/PendingOrders?userId=";
  private _baseUrl1: string = "http://localhost:52705/api/Orders";
  index :number;
  divhide:boolean=true;
  id = sessionStorage.getItem("UserId");

  constructor(private globalService:GlobalService)
  {
    this.getPendingOrders();
  }


  getPendingOrders(){
    return this.globalService.GetMethod(this._baseUrl+this.id);
  }

  extractData(res: Response)
  {
    let response = res.json();
    let body = response;
    console.log(body);
    
    return body || {};
  }
  handleError(error: Response | any)
  {
    let errMsg: string;
    if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
        errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    let errorResponse = error.json();
    if (errorResponse.StatusCode == 401) {
        location.reload();
    }
    return Observable.throw(errMsg);
  }
  Index(id:number)
  {
      this.index=id;
      
  }
  PutOrder(order):Observable<number>
  {
      console.log("in put pending service");
      console.log(order);
      return this.globalService.PutMethodWithUrl(order,this._baseUrl1+"/"+order.Id);
      
  }
  /*postdata(Stocklist: any): Observable<any>
  {
    return this._http.post(this._baseUrl, Stocklist).
    map(this.extractData).catch(this.handleError);
    
  }*/
  
  
}
