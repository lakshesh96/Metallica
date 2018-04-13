import { Injectable } from '@angular/core';
import{CurrentPosition} from "../../Models/current-position"
import {GlobalService} from '../../Services/global.service';

@Injectable()
export class CurrentPositionService {

  CurrentS : CurrentPosition[];
  //url = "http://localhost:52705/api/Position/Approved";
  url = "http://localhost:52705/api/Position/Approved?userId=";

  constructor(private globalService:GlobalService) {
  //  this.CurrentS = [new CurrentPosition("Aayush", "TCS",   "tcs",500, 200, 250, 100000, ),
  //                   new CurrentPosition("Ankit", "Infosys",   "Infi",500, 200, 250, 10000,),
  //                   new CurrentPosition("Akshat", "Goa_Carbon",   "gc",   500, 200, 250, 10000, ),
  //                   new CurrentPosition("Aditya", "TCS",   "tcs",   500, 200, 250, 10000, ),
  //                   new CurrentPosition("Jatin", "IGL",   "Igl",   500, 200, 250, 10000, ),
  //                   new CurrentPosition("Jaadu", "Emami",   "Emi",   500, 200, 250, 10000, ),
  //                   new CurrentPosition("Saap", "ITC",   "ITC",   500, 200, 250, 10000, ),
  //                   new CurrentPosition("Pankaj", "Sanofi",   "sfi",   500, 200, 250, 10000, ),    
  //  ]
  this.GetPosition();
  }

  GetPosition(){
    let userid = sessionStorage.getItem("UserId");
    /* this.globalService.GetWithId(this.url,userid).subscribe(
      response => this.CurrentS = response,
      error => console.error(error),
      () => console.log(this.CurrentS)
    ); */

    return this.globalService.GetMethod(this.url+userid);
  }

}
