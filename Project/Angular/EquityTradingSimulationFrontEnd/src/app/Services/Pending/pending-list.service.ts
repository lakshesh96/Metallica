import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; //
import 'rxjs/add/operator/catch';
import {GlobalService} from '../../Services/global.service';

@Injectable()
export class PendingListService 
{
  private _baseUrl: string = "http://localhost:52705/api/Trader/PendingOrders";
  index :number;
  divhide:boolean=true;
  ListStocks:any[];
  

  constructor(private globalService:GlobalService)
  {
    this.getPendingOrders();
  }
  // getProducts(): Observable<any[]>
  // {
  //   return this._http.get(this._baseUrl).
  //   map(this.extractData).catch(this.handleError);
  // }

  getPendingOrders(){
    this.globalService.GetMethod(this._baseUrl).subscribe
    (response => this.ListStocks = response,
    error => console.error(error),
    () => { console.info(this.ListStocks) }
);
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
