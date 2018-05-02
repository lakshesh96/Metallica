import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit() { }

	searchData: any[];

	hideAddTrade: boolean = false;
	hideEditTrade: boolean = true;
	hideTradeDetails: boolean = true;

	hideRightBar: boolean = true;

	addTrade() {
		this.hideRightBar = false;
		this.hideAddTrade = false;
	}

	searchReceived(data) {
		console.log("Received Search Result", data);
		this.searchData = data;
	}

	logOut(){
		sessionStorage.removeItem("AccessToken");
		sessionStorage.removeItem("RefData");
		console.log("LoggedOut");
		this.router.navigateByUrl('Login');

	}
}
