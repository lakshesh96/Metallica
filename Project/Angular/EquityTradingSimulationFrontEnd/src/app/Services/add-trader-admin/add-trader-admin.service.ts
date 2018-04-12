import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch'; 
import { GlobalService } from "../global.service";

@Injectable()
export class AddTraderAdminService {

  private _baseUrl: string = "http://localhost:52705/api/Users/PutList";

  traders:any;

  constructor(private _http: Http,private globalService:GlobalService) {
  }

  getTraders()
  {
      this.globalService.GetMethod(this._baseUrl).subscribe
          (response => this.traders = response,
          error => console.error(error),
          () => { console.info(this.traders)}
      ); 
  }
  

  AddTraders(r:any)
  {
    alert("Traders received at my service");
    console.log(r+"traders");
    this.globalService.PostMethod(r,this._baseUrl).subscribe(
        response => response,
        error => console.error(error),
        () => this.getTraders()
    );
    console.info(r);
  }

}
