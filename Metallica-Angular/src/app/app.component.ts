import { Component } from '@angular/core';
import { GlobalService } from './Services/GlobalService/global.service';

export var referenceData;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	hideAddTrade: boolean = false;
	hideEditTrade: boolean = true;
	hideTradeDetails: boolean = true;

	hideRightBar: boolean = false;

	toggle_class() {
		this.hideRightBar = !this.hideRightBar;
	}

	openPanel() {
		this.hideRightBar = !this.hideRightBar;
	}

	constructor(public globalService: GlobalService) { }
}