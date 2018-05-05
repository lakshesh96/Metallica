import { Component, OnInit } from '@angular/core';
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
  TradeForm : FormGroup;
  CommodityList: Commodity[];
  LocationList: Location[];
  CounterPartyList: Counterparty[];
  Userid: string;
  status: number=0;
  price: number;
  date: Date = new Date();
  dateString: string;
  onChange(event){
    let commodityId = event.target.value;
    this.CommodityList.forEach(element => {
      if (element.Id == commodityId)
        this.price=element.CurrentPrice;
    });
  }
	constructor(private TradeOperationService : TradeOperationService, private GlobalService : GlobalService) {
		this.CommodityList = GlobalService.getReferenceData("Commodities");
		this.LocationList=GlobalService.getReferenceData("Locations");
		this.CounterPartyList=GlobalService.getReferenceData("CounterParties");
		this.Userid=GlobalService.getUserData("UserId");
		this.dateString=this.date.toISOString();
	}


	ngOnInit() {
		this.TradeForm = new FormGroup({
			Date: new FormControl(),
			CommodityId:new FormControl('', [Validators.required]),
			Side:new FormControl(),
			CounterPartyId:new FormControl('', [Validators.required]),
			Price:new FormControl(''),
			Quantity:new FormControl('', [Validators.required,Validators.pattern(/^[1-9]{1}[0-9]{0,3}$/)]),
			LocationId:new FormControl('', [Validators.required]),
			UserId: new FormControl('',[Validators.required]),
			Status: new FormControl('',[Validators.required])
		});
		//this.TradeForm.get('Price').disable();
	}

	onSubmit({ value, valid }: { value: TradeTable, valid: boolean }) {
		console.log(value, valid);
	}

	AddTrade(item){
		console.log("Hi there at add",item.value);
		this.TradeOperationService.Add(item.value);
	}

  
}