import { Injectable } from '@angular/core';

import { GlobalService } from '../global.service';


@Injectable()
export class BlockserviceService {
  pendingblock:any[];
  partialblock:any[];
  id=sessionStorage.getItem("UserId");
  status:string;
 
  /*private url:string="http://localhost:52705/api/Trader/Block?userId=";
  private cr_url:string="http://localhost:52705/api/Trader/NewBlock?orderId="
  private ex_url:string="http://localhost:52705/api/Trader/ExecuteBlock?blockId="*/

  private url:string = "api/Trader/Block?userId=";
  private cr_url:string = "api/Trader/NewBlock?orderId=";
  private ex_url:string = "api/Trader/ExecuteBlock?blockId=";
  private AddToExisting_url:string="api/Trader/AddToBlock?orderId=";

  constructor(private gs:GlobalService) { 
    
  }

  createnewblock(orderId)
  {
    return this.gs.PostMethod("",this.cr_url+orderId);
    
  }



  get_pendingblock(){
    return this.gs.GetMethod(this.url+this.id+"&blockStatus=Pending");
    
    /*this.gs.GetMethod(this.url+this.id+"&blockStatus=Partial").subscribe(
      response => this.partialblock = response,
      error => console.error(error),
      () => console.log()
    );*/
  }
  get_pendingAndPartialblock(){
    return this.gs.GetMethod(this.url+this.id+"&blockStatus=PendingAndPartial");
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
 AddToBlock(orderId,blockId)
 {
   console.log("Went to add");
    this.gs.PostMethod("",this.AddToExisting_url+orderId+"&blockId="+blockId).subscribe(
    response => console.log(response+"Added"),
    error => console.error(error),
    () => console.log()
  );
 }

}
