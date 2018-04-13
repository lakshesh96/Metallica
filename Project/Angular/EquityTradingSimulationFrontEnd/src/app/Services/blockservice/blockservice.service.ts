import { Injectable } from '@angular/core';

import { GlobalService } from '../global.service';


@Injectable()
export class BlockserviceService {
  pendingblock:any[];
  partialblock:any[];
  id=sessionStorage.getItem("UserId");
 private url:string="api/Trader/Block?userId=";
  constructor(private gs:GlobalService) { 
    this.get_partialblock();
    this.get_pendingblock();
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
