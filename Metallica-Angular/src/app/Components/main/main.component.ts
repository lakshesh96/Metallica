import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../Services/GlobalService/global.service';
import { TradeOperationService } from '../../Services/TradeOperation/trade-operation-service.service';
declare var $:any;
import { TradeTable } from '../../Models/trade-table';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	//Alert Modal Variables
	title: string;
	body: string;
	bodyDetails: string;
	alertSource: string;
	alertHidden: boolean = true;
	
	rowHighlightToggle:number;
	UserName:string;

	constructor(private router: Router, private globalService: GlobalService,private tradeService:TradeOperationService) { 
		this.UserName = globalService.getUserData("Name");
	}

	ngOnInit() {
		
	 }

	searchData: any[];

	hideAddTrade: boolean = true;
	hideDetails: boolean = true;
	hideRightBar: boolean = true;

	trade:TradeTable;

	openTradeAddForm() {
		this.hideRightBar = false;
		this.hideDetails = true;
		this.hideAddTrade = false;
	}

	closeRightTab() {
		this.hideRightBar = true;
		this.hideDetails = true;
		this.hideAddTrade = true;
		this.rowHighlightToggle = -1;
	}

	searchReceived(data) {
		this.searchData = data;
	}

	logOut(){
		sessionStorage.removeItem("AccessToken");
		localStorage.removeItem("RefData");
		localStorage.removeItem("UserDetails");
		this.alertHidden = true;
		
		this.throwAlert("Successfully Logged Out", "User session has been deleted!", "Press OK to continue", "Success");
	}

	tradeReceive(trade) {
		this.hideRightBar = false;
		this.hideDetails = false;
		this.hideAddTrade = true;
		this.trade = trade;
	}

	throwAlert(title,body,bodyDetails,alertSource) {
		this.alertHidden = false;
		this.title = title;
		this.body = body;
		this.bodyDetails = bodyDetails;
		this.alertSource = alertSource;
		console.log("At Main component throw",this.alertHidden,title,body,alertSource,bodyDetails);
	}

	closeAlertRoute(value) {
		console.log("At Main component close: ",value);
		if(value)
			this.router.navigateByUrl('Login');
	}
}
