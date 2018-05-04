import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../Services/GlobalService/global.service';
import { TradeOperationService } from '../../Services/TradeOperation/trade-operation-service.service';
declare var $:any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	UserName:string;
	constructor(private router: Router, private globalService: GlobalService,private tradeService:TradeOperationService) { 
		this.UserName = globalService.getUserData("Name");
	}

	ngOnInit() { }

	searchData: any[];

	hideAddTrade: boolean = false;
	hideEditTrade: boolean = true;
	hideTradeDetails: boolean = true;

	hideRightBar: boolean = true;

	trade;

	addTrade() {
		this.hideRightBar = false;
		this.hideAddTrade = false;
		this.router.navigateByUrl('/Main/Add');
	}

	searchReceived(data) {
		console.log("Received Search Result", data);
		this.searchData = data;
	}

	logOut(){
		sessionStorage.removeItem("AccessToken");
		localStorage.removeItem("RefData");
		// console.log("LoggedOut");
		this.router.navigateByUrl('Login');

	}
	tradeReceive(trade)
	{
		this.trade = trade;
	}
}
