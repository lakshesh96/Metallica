import { Injectable } from '@angular/core';

import { GlobalService } from '../global.service';


@Injectable()
export class BlockserviceService {
  pendingblock:any[];
  partialblock:any[];
  id=sessionStorage.getItem("UserId");
  status:string;
 private url:string="http://localhost:52705/api/Trader/Block?userId=";
 private cr_url:string="http://localhost:52705/api/Trader/NewBlock?orderId="
 private ex_url:string="http://localhost:52705/api/Trader/ExecuteBlock?blockId="
  constructor(private gs:GlobalService) { 
    this.get_partialblock();
    this.get_pendingblock();
    
  }

  createnewblock(orderId)
  {
    this.gs.PostMethod("", this.cr_url+orderId).subscribe(
      response => this.status = response,
      error => console.error(error),
      () => console.log(console.log(this.status+ "Hello"))
    );
  }



  get_partialblock(){
    return this.gs.GetMethod(this.url+this.id+"&blockStatus=Partial");
    
    /*this.gs.GetMethod(this.url+this.id+"&blockStatus=Partial").subscribe(
      response => this.partialblock = response,
      error => console.error(error),
      () => console.log()
    );*/
  }
  get_pendingblock(){
    return this.gs.GetMethod(this.url+this.id+"&blockStatus=Pending");
    /*this.gs.GetMethod(this.url+this.id+"&blockStatus=Pending").subscribe(
      response => this.pendingblock = response,
      error => console.error(error),
      () => console.log()
    );*/
  }


 executeblock(exec_id)
 {
   console.log("executed");
  this.gs.GetMethod(this.ex_url+exec_id).subscribe(
    response => this.partialblock = response,
    error => console.error(error),
    () => console.log()
  );
 }


}
