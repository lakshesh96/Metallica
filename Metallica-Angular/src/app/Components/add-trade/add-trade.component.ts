import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { TradeFormModel } from '../../Models/trade-form';
import { TradeOperationService } from '../../Services/TradeOperation/trade-operation-service.service';

@Component({
  selector: 'app-add-trade',
  templateUrl: './add-trade.component.html',
  styleUrls: ['./add-trade.component.css']
})
export class AddTradeComponent {
  TradeForm : FormGroup;
  TradeList: TradeFormModel[];

  constructor(private DS : TradeOperationService) { }
      

  ngOnInit() {
    this.TradeList = this.DS.TradeList;

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

  onSubmit({ value, valid }: { value: TradeFormModel, valid: boolean }) {
    console.log(value, valid);
    this.DS.insert(value);
  }

  Add(date, commodity, side, counterparty, price, quantity, location){
    var p = { TradeDate: date, Commodity: commodity, Side: side, Counterparty: counterparty, Price: price, Quantity: quantity, Location: location }
    this.DS.insert(p);
  }
}