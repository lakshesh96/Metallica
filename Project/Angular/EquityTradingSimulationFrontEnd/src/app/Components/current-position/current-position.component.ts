import { Component, OnInit } from '@angular/core';
import{CurrentPosition} from "../../Models/current-position"
import{CurrentPositionService} from "../../Services/current-position/current-position.service"
import {BuySellService  } from "../../Services/buy-sell/buy-sell.service";

@Component({
  selector: 'app-current-position',
  templateUrl: './current-position.component.html',
  styleUrls: ['./current-position.component.css']
})
export class CurrentPositionComponent implements OnInit {
  list : CurrentPosition[];

  constructor(private DS: CurrentPositionService,private buysellservice:BuySellService) {
    this.DemoRefresh();
   }

  DemoRefresh(){
    this.DS.GetPosition().subscribe(
      response => this.list = response,
      error => console.error(error),
      () => console.log(this.list)
    );
  }

  getPosition(){
    
  this.DemoRefresh();
    //this.list = this.DS.CurrentS;
    alert("executed");
  }

  ngOnInit() {
    //this.list=this.DS.CurrentS
  }

  Sell(e){
    this.buysellservice.GetSellOrder(e);
    
  }

}
