import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// import {Login} from '../Models/Login';
// import {Admin} from '../Models/Admin';
// import {Stocks} from '../Models/Login';
// import {Contains} from '../Models/Login';


@Injectable()
export class GlobalService {

  private _baseUrl:string; // = "http://localhost:60061/api/Admin";

  // login: Login[];
  // admin: Admin[];
  // stock: Stocks[];
  // new_stock: Contains[];


  constructor(private _http:Http) { }

  PostMethod(credentials,url):Observable<any>{
    //console.log(credentials);
    console.log(url);
    this._baseUrl = url;
    console.log("At Post Service ->");
    console.log(credentials);
    return this._http.post(this._baseUrl,credentials).map(this.extractData).catch(this.handleError);
  }

  GetMethod(url):Observable<any[]>{
    this._baseUrl = url;    
    return this._http.get(this._baseUrl).map(this.extractData).catch(this.handleError);
  }

  PutMethod(data,url):Observable<any>{
    
    this._baseUrl = url;        
    return this._http.put(this._baseUrl+"/"+data.id,data).map(this.extractData).catch(this.handleError);
  }

  GetWithId(url,id):Observable<any[]>{
    this._baseUrl = url;
    return this._http.get(this._baseUrl+"/"+id).map(this.extractData).catch(this.handleError);
  }

  extractData(res:Response){
    let response = res.json();
    let body = response;
    //console.log(body);
    return body || {};
  }

  extractBlocks()
  {
    
  }


  handleError(error: Response | any) {
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
}
