import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TradeTable } from '../../Models/trade-table';
import { GlobalService } from '../../Services/GlobalService/global.service';
import { Commodity } from '../../Models/commodity';
import { Location } from '../../Models/location';
import { Counterparty } from '../../Models/counterparty';

@Component({
  selector: 'app-trade-details',
  templateUrl: './trade-details.component.html',
  styleUrls: ['./trade-details.component.css']
})
export class TradeDetailsComponent implements OnInit,OnChanges {

	@Input() trade: TradeTable;

	//trade: any = new Object();

	tradeForm: FormGroup;
	commodities: Commodity[] = [];
	locations: Location[] = [];
	counterParties: Counterparty[] = [];

	details: boolean = false;

  	constructor(public globalService: GlobalService) { 
		this.commodities = globalService.getReferenceData("Commodities");
		this.counterParties = globalService.getReferenceData("CounterParties");
		this.locations = globalService.getReferenceData("Locations");

		this.tradeForm = new FormGroup({
			'Date': new FormControl(),
			'CommodityId': new FormControl('', [Validators.required]),
			'Side': new FormControl(),
			'CounterPartyId': new FormControl('', [Validators.required]),
			'Price': new FormControl(''),
			'Quantity': new FormControl('', [Validators.required]),
			'LocationId': new FormControl('', [Validators.required]),
			'UserId': new FormControl('',[Validators.required]),
			'Status': new FormControl('',[Validators.required])
		});

		this.tradeForm.get('Date').disable();
		this.tradeForm.get('CommodityId').disable();
		this.tradeForm.get('Side').disable();
		this.tradeForm.get('CounterPartyId').disable();
		this.tradeForm.get('Price').disable();
		this.tradeForm.get('Quantity').disable();
		this.tradeForm.get('LocationId').disable();
		this.tradeForm.get('UserId').disable();
		this.tradeForm.get('Status').disable();
	}

	ngOnInit() { 
		
		//this.tradeForm.setValue(this)
		// this.trade.CommodityId = "18c70d50-0f4d-e811-b2c3-94c69105a31f";
		// this.trade.Commodity = this.commodities.find(x => x.Id === "18c70d50-0f4d-e811-b2c3-94c69105a31f");
		// this.trade.CounterPartyId = "4cd25540-5b4c-e811-821a-94c69105a2da";
		// this.trade.CounterParty = this.counterParties.find(x => x.Id === "4cd25540-5b4c-e811-821a-94c69105a2da");
		// this.trade.LocationId = "4cffd948-5b4c-e811-821a-94c69105a2da";
		// this.trade.Location = this.locations.find(x => x.Id === "4cffd948-5b4c-e811-821a-94c69105a2da");
		// this.trade.Price = 100;
		// this.trade.Quantity = 100;
		// this.trade.Side = "buy";
		// this.trade.Status = 0;
		// this.trade.UserId = 0;
		// this.trade.Date = new Date();
		console.log(this.trade);
	}
	
	ngOnChanges(){
		console.log(this.trade);
		this.tradeForm.controls["CommodityId"].setValue(this.trade.CommodityId);
		this.tradeForm.controls["CounterPartyId"].setValue(this.trade.CounterPartyId);
		this.tradeForm.controls["LocationId"].setValue(this.trade.LocationId);
		this.tradeForm.controls["Side"].setValue(this.trade.Side);

	}
	

	onEditClick() {
		console.log(this.trade);
		this.details = false;
		this.tradeForm.get('Date').enable();
		this.tradeForm.get('CommodityId').enable();
		this.tradeForm.get('Side').enable();
		this.tradeForm.get('CounterPartyId').enable();
		this.tradeForm.get('Price').enable();
		this.tradeForm.get('Quantity').enable();
		this.tradeForm.get('LocationId').enable();
		this.tradeForm.get('UserId').enable();
		this.tradeForm.get('Status').enable();
	}

	onSubmit(trade) {
		trade["Status"] = this.trade.Status;
		trade["UserId"] = this.trade.UserId;
		console.log(trade);
	}

}
