import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch'; 
import { GlobalService } from "../global.service";

@Injectable()
export class AddPmAdminService {

  private _baseUrl: string = "http://localhost:52705/api/Users/PutList";

  pms:any;

  constructor(private _http: Http,private globalService:GlobalService) {
  }

  getPMs()
  {
      this.globalService.GetMethod(this._baseUrl).subscribe
          (response => this.pms = response,
          error => console.error(error),
          () => { console.info(this.pms)}
      ); 
  }
  

  AddPMs(r:any)
  {
    alert("Traders received at my service");
    console.log(r+"PMs");
    this.globalService.PostMethod(r,this._baseUrl).subscribe(
        response => response,
        error => console.error(error),
        () => this.getPMs()
    );
    console.info(r);
  }


}
