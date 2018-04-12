import { Component, OnInit } from '@angular/core';
import {BlockserviceService} from "../../Services/blockservice/blockservice.service";
import { OrderService } from '../../Services/Order/order.service';
import { ListService } from '../../Services/list-service/list.service';
import { StocksService } from '../../Services/StocksList/stocks.service';

@Component({
  selector: 'app-block-creation',
  templateUrl: './block-creation.component.html',
  styleUrls: ['./block-creation.component.css']
})
export class BlockCreationComponent implements OnInit {

  block:any[];
  order:any[];
  user:any[];
  stock:any[];
  constructor(
      private blockservice:BlockserviceService,
      private orderservice:OrderService,
      private listservice:ListService,
      private stockservice:StocksService
    ) { }

  ngOnInit() {
   
     
  }
 getvalue()
 {
     this.block=this.blockservice.block;
     this.order=this.orderservice.order;
     this.user=this.listservice.users;
     this.stock=this.stockservice.StocksList;
     
 }
  show()
  {
      console.log(this.user);
      console.log(this.block);
      console.log(this.order);
      console.log(this.stock)
      
  }
 
}
