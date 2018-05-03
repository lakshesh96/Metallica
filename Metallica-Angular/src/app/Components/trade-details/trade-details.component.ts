import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-trade-details',
  templateUrl: './trade-details.component.html',
  styleUrls: ['./trade-details.component.css']
})
export class TradeDetailsComponent {

	tradeForm: FormGroup;

	disabled: boolean = true;
  	constructor() { 
		this.disabled = true;

		this.tradeForm = new FormGroup({
			quantity: new FormControl({value: '', disabled:true})
		});
	}

}
