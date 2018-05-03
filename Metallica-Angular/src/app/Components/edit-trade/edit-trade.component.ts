import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-trade',
  templateUrl: './edit-trade.component.html',
  styleUrls: ['./edit-trade.component.css']
})
export class EditTradeComponent implements OnInit {
trade=null;
  constructor() {
    console.log(this.trade);
   }

  ngOnInit() {
  }

}
