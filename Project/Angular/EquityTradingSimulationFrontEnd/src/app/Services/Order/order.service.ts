import { Injectable } from '@angular/core';
  import { GlobalService } from '../global.service';

@Injectable()
export class OrderService {
  order:any[];
  private url:string="http://localhost:52705/api/Orders";
  constructor(private gs:GlobalService) { 
    this.get_orderdata();
  }

  get_orderdata()
  {
    this.gs.GetMethod(this.url).subscribe(
      response => this.order = response,
      error => console.error(error),
      () => console.log()
    );
  }




}
