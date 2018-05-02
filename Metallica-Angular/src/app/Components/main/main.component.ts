import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	constructor() { }

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
}
