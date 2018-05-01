import { Component , OnInit } from '@angular/core';

import {TradeForm} from '../../models/trade-form';
import {TradeOperationService} from '../../Services/TradeOperation/trade-operation-service.service';

@Component({
  selector: 'app-add-trade',
  templateUrl: './add-trade.component.html',
  styleUrls: ['./add-trade.component.css']
})
export class AddTradeComponent implements OnInit {

  TradeList : TradeForm[];

  constructor(private DS : TradeOperationService) { }
  ngOnInit() {
	  this.TradeList = this.DS.TradeList;
  }

  Add(date,commodity,side,counterparty,price,quantity,location){
    var p = {TradeDate: date, Commodity: commodity, Side: side, Counterparty: counterparty, Price: price, Quantity:quantity, Location: location}
	  this.DS.insert(p);
  }
}
