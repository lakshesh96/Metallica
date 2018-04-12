import { Injectable } from '@angular/core';

import { GlobalService } from '../global.service';


@Injectable()
export class BlockserviceService {
  block:any[];
 private url:string="http://localhost:52705/api/blocks";
  constructor(private gs:GlobalService) { 
    this.get_blockdata();
  }

  get_blockdata(){
    this.gs.GetMethod(this.url).subscribe(
      response => this.block = response,
      error => console.error(error),
      () => console.log()
    );
  }




}
