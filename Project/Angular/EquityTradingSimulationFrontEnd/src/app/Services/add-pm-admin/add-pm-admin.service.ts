import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch'; 
import { GlobalService } from "../global.service";

@Injectable()
export class AddPmAdminService {

  private _baseUrl: string = "http://localhost:52705/api/Users/PutList";
  private _baseUrl1: string = "http://localhost:52705/api/PM/Approved";
  private _baseUrl2: string = "http://localhost:52705/api/PM/Unapproved";

  pms:any;

  constructor(private _http: Http,private globalService:GlobalService) {
  }

  getPMApproved()
  {
      this.globalService.GetMethod(this._baseUrl1).subscribe
          (response => this.pms = response,
          error => console.error(error),
          () => { console.info(this.pms)}
      ); 
      return this.globalService.GetMethod(this._baseUrl1);
  }

  getPMUnapproved()
  {
      this.globalService.GetMethod(this._baseUrl2).subscribe
          (response => this.pms = response,
          error => console.error(error),
          () => { console.info(this.pms)}
      ); 
      return this.globalService.GetMethod(this._baseUrl2);
    }
  

  AddPMs(r:any)
  {
    alert("Traders received at my service");
    console.log(r+"PMs");
    this.globalService.PostMethod(r,this._baseUrl).subscribe(
        response => response,
        error => console.error(error),
        //() => this.getPMs()
    );
    console.info(r);
  }


}
