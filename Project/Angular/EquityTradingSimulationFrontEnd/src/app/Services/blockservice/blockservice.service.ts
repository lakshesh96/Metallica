import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class BlockserviceService {

 private url:string="http://localhost:52705/api/blocks";
  constructor(private http:Http) { }

  get_data():Observable<any>{
    return this.http.get(this.url).map(this.extractData);
  }



  extractData(r:Response)
{
let response=r.json();
let body=response;
return body;
}

}
