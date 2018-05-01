import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { TradeForm } from '../../Models/trade-form';
import {TradeOperationService} from '../../Services/TradeOperation/trade-operation-service.service';

@Component({
  selector: 'app-add-trade',
  templateUrl: './add-trade.component.html',
  styleUrls: ['./add-trade.component.css']
})
export class AddTradeComponent {
  TradeForm : FormGroup;
  constructor() { }
  ngOnInit() {
    this.TradeForm = new FormGroup({
      Date: new FormControl(),
      Commodity:new FormControl('', [Validators.required]),
      Side:new FormControl(),
      Counterparty:new FormControl('', [Validators.required]),
      Price:new FormControl(),
      Quantity:new FormControl('', [Validators.required]),
      Location:new FormControl('', [Validators.required])
  });
  }
  onSubmit({ value, valid }: { value: TradeForm, valid: boolean }) {
      console.log(value, valid);
      TradeList: TradeForm[];

      constructor(private DS : TradeOperationService) { }
      ngOnInit() {
          this.TradeList = this.DS.TradeList;
      }

      Add(date, commodity, side, counterparty, price, quantity, location){
          var p = { TradeDate: date, Commodity: commodity, Side: side, Counterparty: counterparty, Price: price, Quantity: quantity, Location: location }
          this.DS.insert(p);
      }
  }
export class AddTradeComponent implements OnInit {

  
}
