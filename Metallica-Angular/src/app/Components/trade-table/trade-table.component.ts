import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TradeTableService } from "../../Services/tradeTable/trade-table.service";
import {  } from 'events';
import { TradeTable } from '../../Models/trade-table';

@Component({
  selector: 'app-trade-table',
  templateUrl: './trade-table.component.html',
  styleUrls: ['./trade-table.component.css']
})
export class TradeTableComponent implements OnInit {

	@Input() trades: any[];
	@Output() tradeEmit = new EventEmitter<TradeTable>(); 

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
			() => {
				//this.updateNewTrades();
			}
		);
	}

	getSearchTrades(tradeList) {
		this.trades = tradeList;
	}

	
	updateNewTrades() {
		console.log("Listening for New Trade Updates");
		let newTrade: any;
		this.tradeService.GetTradeUpdates().subscribe(
			response => {
				newTrade = response;
				//console.log("Notification");
			},
			error => console.error(error),
			() => {
				console.log("New Trades. Notification Received:", newTrade);
				if (newTrade != null && newTrade["Text"] == "Trade Added")
					this.addToTradeTable(newTrade["Object"]);
				else if (newTrade != null && newTrade["Text"] == "Trade Updated")
					this.updateTradeTable(newTrade["Object"]);
				else if (newTrade != null && newTrade["Text"] == "Trade Deleted")
					this.deleteFromTable(newTrade["Object"]);
				this.updateNewTrades();
			}
		);
	}

	addToTradeTable(newTrade) {
		this.trades.unshift(newTrade);
	}
	
	updateTradeTable(trade) {
		this.trades.map((findTrade) => findTrade.Id == trade.Id ? trade : findTrade);
	}

	deleteFromTable(trade) {
		this.trades = this.trades.filter((findTrade) => { return findTrade.Id != trade.Id });
	}
	detailRequest(trade)
	{
		this.tradeEmit.emit(trade);
	}
}

