import { Injectable } from '@angular/core';
import {GlobalService} from '../../Services/global.service';

@Injectable()
export class AddStockAdminService {

  list=[];
  url = "http://localhost:52705/api/Stocks";
  AzureUrl = "http://equitytrading.azurewebsites.net/api/Stocks";

  constructor(private globalService:GlobalService) { }

  onAdd(p){
    //console.log(value,valid);
    this.list.push(p);
    //console.log(this.list);
    let b:any = {Symbol: this.list[0].Symbol, Name: this.list[0].Name, CurrentPrice: this.list[0].CurrentPrice, VolumeAvailable: this.list[0].VolumeAvailable}
    /* this.globalService.PostMethod(b,this.url).subscribe(
      response => response,
      error => console.error(error),
      () => console.log()
    ); */

    //return this.globalService.PostMethod(b,this.url);
    //Azure:
    return this.globalService.PostMethod(b,this.AzureUrl);
  }
}
