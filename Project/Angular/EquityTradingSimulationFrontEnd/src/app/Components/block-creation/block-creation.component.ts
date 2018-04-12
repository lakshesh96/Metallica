import { Component, OnInit } from '@angular/core';
import {BlockserviceService} from "../../Services/blockservice/blockservice.service";
import { OrderService } from '../../Services/Order/order.service';

@Component({
  selector: 'app-block-creation',
  templateUrl: './block-creation.component.html',
  styleUrls: ['./block-creation.component.css']
})
export class BlockCreationComponent implements OnInit {

  block:any[];
  order:any[];

  constructor(private bs:BlockserviceService,private os:OrderService) { }

  ngOnInit() {
  }

  getblockdata()
  {
      this.bs.get_blockdata().subscribe
          (response => this.block = response,
          error => console.error(error)
      ); 
  }
  getorderdata()
  {
      this.os.get_orderdata().subscribe
          (response => this.order = response,
          error => console.error(error)
      ); 
  }

}
