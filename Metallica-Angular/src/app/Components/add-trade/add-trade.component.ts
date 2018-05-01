import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { TradeForm } from '../../Models/trade-form';

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
  }
}
