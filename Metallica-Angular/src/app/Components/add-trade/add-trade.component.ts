import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { TradeTable } from '../../Models/trade-table';
import { Commodity } from '../../Models/commodity';
import { Location } from '../../Models/location';
import { Counterparty } from '../../Models/counterparty';
import {TradeOperationService} from '../../Services/TradeOperation/trade-operation-service.service';
import { GlobalService } from '../../Services/GlobalService/global.service'

@Component({
	selector: 'app-add-trade',
	templateUrl: './add-trade.component.html',
	styleUrls: ['./add-trade.component.css']
})
export class AddTradeComponent implements OnInit {

	@Output() closeForm = new EventEmitter<boolean>();

	TradeForm : FormGroup;
	CommodityList: Commodity[];
	LocationList: Location[];
	CounterPartyList: Counterparty[];

	price: number = 0;
	date: Date = new Date();

	constructor(private TradeOperationService : TradeOperationService, private GlobalService : GlobalService) {
		this.CommodityList = GlobalService.getReferenceData("Commodities");
		this.LocationList = GlobalService.getReferenceData("Locations");
		this.CounterPartyList = GlobalService.getReferenceData("CounterParties");
	}

	ngOnInit() {
		this.TradeForm = new FormGroup({
			CommodityId: new FormControl('', [Validators.required]),
			Side: new FormControl(),
			CounterPartyId: new FormControl('', [Validators.required]),
			Quantity: new FormControl('', [Validators.required,Validators.pattern(/^[1-9]{1}[0-9]{0,3}$/)]),
			LocationId: new FormControl('', [Validators.required])
		});
	}

	// onSubmit({ value, valid }: { value: TradeTable, valid: boolean }) {
	// 	value["Price"] = this.price;
	// 	console.log(value, valid);
	// }

	AddTrade(item){
		item.value["Price"] = this.price;
		item.value["Status"] = 0;
		item.value["UserId"] = this.GlobalService.getUserData("UserId");
		item.value["Date"] = new Date().toLocaleString();
		this.TradeOperationService.Add(item.value);
	}

	changePriceOnCommoditySelection(event){
		let commodityId = event.target.value;
		this.price = 0;
		this.CommodityList.forEach(element => {
			if (element.Id == commodityId)
				this.price=element.CurrentPrice;
		});
	}  

	closeTab() {
		this.TradeForm.reset();
		this.price = 0;
		this.closeForm.emit(true);
	}
}