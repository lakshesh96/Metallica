import { Injectable } from '@angular/core';

import { GlobalService } from '../global.service';


@Injectable()
export class BlockserviceService {
  pendingblock:any[];
  partialblock:any[];
  id=sessionStorage.getItem("UserId");
  status:string;
 private url:string="http://localhost:52705/api/Trader/Block?userId=";
 private url1:string="http://localhost:52705/api/Trader/NewBlock?orderId="
  constructor(private gs:GlobalService) { 
    this.get_partialblock();
    this.get_pendingblock();
  }

  createnewblock(orderId)
  {
    this.gs.PostMethod("", this.url+orderId).subscribe(
      response => this.status = response,
      error => console.error(error),
      () => console.log(console.log(this.status+ "Hello"))
    );
  }

  get_partialblock(){
    this.gs.GetMethod(this.url+this.id+"&blockStatus=Partial").subscribe(
      response => this.partialblock = response,
      error => console.error(error),
      () => console.log()
    );
  }
  get_pendingblock(){
    this.gs.GetMethod(this.url+this.id+"&blockStatus=Pending").subscribe(
      response => this.pendingblock = response,
      error => console.error(error),
      () => console.log()
    );
  }





}
