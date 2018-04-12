import { Injectable } from '@angular/core';

@Injectable()
export class AddStockAdminService {

  list=[];
  constructor() { }

  onAdd(p){
    //console.log(value,valid);
      this.list.push(p);
      //console.log(this.list);
      
  }
}
