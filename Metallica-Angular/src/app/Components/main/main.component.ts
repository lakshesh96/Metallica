import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../Services/GlobalService/global.service';
import { TradeOperationService } from '../../Services/TradeOperation/trade-operation-service.service';
import { TradeTable } from '../../Models/trade-table';

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

	hideAddTrade: boolean = true;
	hideDetails: boolean = true;
	hideRightBar: boolean = true;

	trade:TradeTable;

	addTrade() {
		this.hideRightBar = false;
		this.hideDetails = true;
		this.hideAddTrade = false;
	}

	searchReceived(data) {
		console.log("Received Search Result", data);
		this.searchData = data;
	}

	logOut(){
		sessionStorage.removeItem("AccessToken");
		localStorage.removeItem("RefData");
		console.log("LoggedOut");
		this.router.navigateByUrl('Login');

	}
	tradeReceive(trade)
	{
		this.hideRightBar = false;
		this.hideDetails = false;
		this.hideAddTrade = true;
		this.trade = trade;
		console.log(trade);
	}
}
