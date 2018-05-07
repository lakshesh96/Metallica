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
	parentSubject: Subject<any> = new Subject();
	rowHighlightToggle:number;


	UserName:string;
	constructor(private router: Router, private globalService: GlobalService,private tradeService:TradeOperationService) { 
		this.UserName = globalService.getUserData("Name");
	}

	ngOnInit() { }

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
		console.log("Received Search Result:", data);
		this.searchData = data;
	}

	logOut(){
		this.throwAlert("Successfully Logged Out", "User session has been deleted!", "Press OK to continue", "Success");
		sessionStorage.removeItem("AccessToken");
		localStorage.removeItem("RefData");
		// console.log("LoggedOut");
	}

	tradeReceive(trade) {
		this.hideRightBar = false;
		this.hideDetails = false;
		this.hideAddTrade = true;
		this.trade = trade;
		//console.log(trade);
	}

	throwAlert(title,body,bodyDetails,alertSource) {
		this.alertHidden = false;
		this.title = title;
		this.body = body;
		this.bodyDetails = bodyDetails;
		this.alertSource = alertSource;
		this.parentSubject.next();
		//$("#LoginModal").modal();
	}

	closeAlertRoute(value) {
		if(value)
			this.router.navigateByUrl('Login');
	}
}
