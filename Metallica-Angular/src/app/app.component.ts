import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	  hideAddTrade: boolean = true;
	  hideEditTrade: boolean = true;
	  hideTradeDetails: boolean = true;

	  hideRightBar: boolean = false;

	  toggle_class() {
		  this.hideRightBar = !this.hideRightBar;
	  }
}