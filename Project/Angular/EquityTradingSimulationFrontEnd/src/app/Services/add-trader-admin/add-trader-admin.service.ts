import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch'; 
import { GlobalService } from "../global.service";

@Injectable()
export class AddTraderAdminService {

  private _baseUrl: string = "http://localhost:52705/api/Users/PutList";
  private _baseUrl1: string = "http://localhost:52705/api/Trader/Approved";
  private _baseUrl2: string = "http://localhost:52705/api/Trader/Unapproved";

  traders:any;

  constructor(private _http: Http,private globalService:GlobalService) {
  }

  getApprovedTraders()
  {
      this.globalService.GetMethod(this._baseUrl1).subscribe
          (response => this.traders = response,
          error => console.error(error),
          () => { console.info(this.traders)}
      ); 

      return this.globalService.GetMethod(this._baseUrl1);
  }

  getUnapprovedTraders()
  {
      this.globalService.GetMethod(this._baseUrl2).subscribe
          (response => this.traders = response,
          error => console.error(error),
          () => { console.info(this.traders)}
      ); 

      return this.globalService.GetMethod(this._baseUrl2);
  }
  

  AddTraders(r:any)
  {
    alert("Traders received at my service");
    console.log(r+"traders");
    this.globalService.PostMethod(r,this._baseUrl).subscribe(
        response => response,
        error => console.error(error),
        //() => this.getTraders()
    );
    console.info(r);
  }

}
