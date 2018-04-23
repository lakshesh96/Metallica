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
  pendingBlocks=[];
  OrderId:number;
  constructor(public blockService:BlockserviceService) {
    this.getPendingBlocks();
   }

  ngOnInit() {
  }
 AddtoBlock(BlockId)
  {
    this.OrderId= sessionStorage["OrderId"]
    if(this.OrderId == null)
      alert("Order not selected please try again")
    else
    {
      this.blockService.AddToBlock(this.OrderId,BlockId);
      this.getPendingBlocks();
    }
  }
  getPendingBlocks(){
    this.blockService.get_pendingblock().subscribe(
      response => this.pendingBlocks= response,
      error => console.error(error),
      () => console.log(this.pendingBlocks)
    );
  }
 
}
