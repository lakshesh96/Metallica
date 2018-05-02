import { Component, OnInit, Input } from '@angular/core';
import { TradeTableService } from "../../Services/tradeTable/trade-table.service";

@Component({
  selector: 'app-trade-table',
  templateUrl: './trade-table.component.html',
  styleUrls: ['./trade-table.component.css']
})
export class TradeTableComponent implements OnInit {

	@Input() trades: any[];

	constructor(private tradeService: TradeTableService) { }
	//trades : any[];
	url : string = "/api/trades";

	ngOnInit() {
		this.getTrades();
		//this.trades = this.searchResults;
	}

	getTrades() {
		this.tradeService.getTrades().subscribe(
			response => this.trades = response,
			error => console.error(error),
			() => { /*console.info(this.trades);*/ }
		);
	}

	getSearchTrades(tradeList) {
		this.trades = tradeList;
	}
}
