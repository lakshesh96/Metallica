import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-trade',
  templateUrl: './edit-trade.component.html',
  styleUrls: ['./edit-trade.component.css']
})
export class EditTradeComponent implements OnInit {
trade=null;
  constructor(private route:ActivatedRoute) {
    this.route.data.subscribe(Response=>this.trade = Response.trade);
    console.log(this.trade);
   }

  ngOnInit() {
  }

}
