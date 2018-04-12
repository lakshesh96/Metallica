import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class BlockserviceService {

 private url:string="";
  constructor(private http:Http) { }




  extractData(r:Response)
{
let response=r.json();
let body=response;
return body;
}

}
