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
  /*Put(list:number):Observable<number>
  {
      alert("service");
      return this._http.put(this._baseUrl +"/"+this.index,list).map(this.extractData);
  }
  postdata(Stocklist: any): Observable<any>
  {
    return this._http.post(this._baseUrl, Stocklist).
    map(this.extractData).catch(this.handleError);
    
  }*/
  
  
}
