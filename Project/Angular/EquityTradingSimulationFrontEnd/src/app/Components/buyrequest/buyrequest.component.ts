import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Stocks } from "../../Models/stocks";
import { Sellmodel } from "../../Models/sell";
import { Buy, OrderSide, OrderType } from '../../Models/buy';
import { BuySellService } from "../../Services/buy-sell/buy-sell.service";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './buyrequest.component.html',
  styleUrls: ['./buyrequest.component.css']
})
export class BuyrequestComponent implements OnInit {

	order:Stocks;
	placedOrder:Sellmodel;
	buy: FormGroup;
  	constructor(private BSservice:BuySellService) {
		 this.order = this.BSservice.buyorder;
	   }

	ngOnInit() {
		this.buy = new FormGroup({
			StocksId: new FormControl('', [Validators.required]),
			Quantity: new FormControl('', [Validators.required]),
			StopPrice: new FormControl('', [Validators.required]),
			LimitPrice: new FormControl('', [Validators.required]),
			OrderType: new FormControl('', [Validators.required])
		}); 
	}

	onSubmit({ value, valid }: { value: Buy, valid: boolean }) {
		alert("Submitted");
		value.OrderSide = OrderSide.Buy;
		if(value.OrderType.toString() == "Market"){
			console.log("Market");
			value.StopPrice=0;
			value.LimitPrice=0;
		}
		else if(value.OrderType.toString()=="Limit"){
			console.log("Limit");
			value.StopPrice=0;
		}
		else if(value.OrderType.toString() == "Stop"){
			console.log("Stop");
			value.LimitPrice=0;
		}
		value.BlockId = null;
		value.PMId = null;
		value.StocksId = this.order.Id;
		 // pick from session variable
		

		/* this.placedOrder = new Sellmodel(null,value.OrderType.toString(),value.OrderSide.toString(),value.Quantity,
							this.order.Id,+sessionStorage.getItem('UserId'),null,value.LimitPrice,value.StopPrice,
							null,null); */
		console.log(value);

		if(sessionStorage.getItem('traderId')!=null && (sessionStorage.getItem('Type') == "1" || sessionStorage.getItem('Type') == "2")) {
			value.PMId = +sessionStorage.getItem('UserId');
			value.UserId = +sessionStorage.getItem('traderId');
			sessionStorage.removeItem('traderId');
			console.log(value, valid);
			this.BSservice.AddBuyPMOrder(value).subscribe(
				response => response,
				error => console.error(error),
				() => alert("success")
			);
			
		}else{
			value.UserId = +sessionStorage.getItem('UserId');
			console.log(value, valid);
		this.BSservice.AddBuyOrder(value).subscribe(
			response => response,
			error => console.error(error),
			() => alert("success")
		);
	}
	}
	LimitFlag:boolean =true;
	StopFlag:boolean =true;
	Toggle(value){
		if(value=="Stop"){
		  this.StopFlag = false;
		  this.LimitFlag =true;
		}
		else if(value=="Limit")
		  {
			this.LimitFlag = false;
			this.StopFlag=true;
		  }
		else if(value=="StopLimit"){
		  this.LimitFlag = false;
		this.StopFlag = false;}
		else if(value=="Market"){
		  this.LimitFlag = true;
		  this.StopFlag=true;
		}
	  
	  }

}
