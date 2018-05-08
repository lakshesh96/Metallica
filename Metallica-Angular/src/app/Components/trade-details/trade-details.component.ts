import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TradeTable } from '../../Models/trade-table';
import { GlobalService } from '../../Services/GlobalService/global.service';
import { Commodity } from '../../Models/commodity';
import { Location } from '../../Models/location';
import { Counterparty } from '../../Models/counterparty';
import { TradeOperationService } from '../../Services/TradeOperation/trade-operation-service.service';

@Component({
  selector: 'app-trade-details',
  templateUrl: './trade-details.component.html',
  styleUrls: ['./trade-details.component.css']
})
export class TradeDetailsComponent implements OnInit,OnChanges {

	@Input() trade: TradeTable;
	@Output() closeForm = new EventEmitter<boolean>();

	tradeDetails: TradeTable;
	price: number = 0;
	tradeForm: FormGroup;
	commodities: Commodity[] = [];
	locations: Location[] = [];
	counterParties: Counterparty[] = [];
	details: boolean = false;

  	constructor(public globalService: GlobalService,public tradeService:TradeOperationService) { 

		this.commodities = globalService.getReferenceData("Commodities");
		this.counterParties = globalService.getReferenceData("CounterParties");
		this.locations = globalService.getReferenceData("Locations");

		this.tradeForm = new FormGroup({
			'Date': new FormControl(),
			'CommodityId': new FormControl('', [Validators.required]),
			'Side': new FormControl(),
			'CounterPartyId': new FormControl('', [Validators.required]),
			'Quantity': new FormControl('', [Validators.required,Validators.pattern(/^[1-9]{1}[0-9]{0,3}$/)]),
			'LocationId': new FormControl('', [Validators.required])
		});
	}

	ngOnInit() { 
		this.trade = new TradeTable();
	}
	
	ngOnChanges(){
		if (this.trade != null) {
			this.showInfo();
		}
	}
	
	onEditClick() {
		this.details = true;
		this.enableForm();
	}

	showInfo() {
		this.details = false;
		this.enableForm();
		this.setFormValues();
		this.disableForm();
	}

	enableForm() {
		this.tradeForm.get('Date').enable();
		this.tradeForm.get('CommodityId').enable();
		this.tradeForm.get('Side').enable();
		this.tradeForm.get('CounterPartyId').enable();
		this.tradeForm.get('Quantity').enable();
		this.tradeForm.get('LocationId').enable();
	}

	disableForm() {
		this.tradeForm.get('Date').disable();
		this.tradeForm.get('CommodityId').disable();
		this.tradeForm.get('Side').disable();
		this.tradeForm.get('CounterPartyId').disable();
		this.tradeForm.get('Quantity').disable();
		this.tradeForm.get('LocationId').disable();
	}

	setFormValues() {
		this.price = this.trade.Price;
		this.tradeForm.controls["CommodityId"].setValue(this.trade.CommodityId);
		this.tradeForm.controls["CounterPartyId"].setValue(this.trade.CounterPartyId);
		this.tradeForm.controls["LocationId"].setValue(this.trade.LocationId);
		this.tradeForm.controls["Side"].setValue(this.trade.Side);
		this.tradeForm.controls["Quantity"].setValue(this.trade.Quantity);
		this.tradeForm.controls["Date"].setValue(this.trade.Date);
		let x: Date = new Date(this.trade.Date);
	}

	onDeleteClick() {
		this.tradeService.Delete(this.trade);
		this.closeTab();
	}

	onSubmit(trade) {
		trade["Id"]=this.trade.Id;
		trade["Status"] = this.trade.Status;
		trade["UserId"] = this.trade.UserId;
		trade["Price"] = this.price;
		this.tradeService.Edit(trade);
		this.closeTab();

	}

	closeTab() {
		this.closeForm.emit(true);
	}

	changePriceOnCommoditySelection(event){
		let commodityId = event.target.value;
		this.price = 0;
		this.commodities.forEach(element => {
			if (element.Id == commodityId)
			this.price = element.CurrentPrice;
		});
	}
}
