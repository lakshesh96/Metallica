import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TradeTableService } from "../../Services/tradeTable/trade-table.service";
import {  } from 'events';
import { TradeTable } from '../../Models/trade-table';
import { Router } from '@angular/router';
import { SearchService } from '../../Services/Search/search.service';

@Component({
  selector: 'app-trade-table',
  templateUrl: './trade-table.component.html',
  styleUrls: ['./trade-table.component.css']
})
export class TradeTableComponent implements OnInit {

	@Input() trades: any[];
	@Output() tradeEmit = new EventEmitter<TradeTable>(); 

	constructor(private tradeService: TradeTableService,public router:Router,public searchService:SearchService) { }
	
	selectedRow: number;
	url : string = "/api/trades";

	ngOnChange() {
		console.log("Hello");
	}

	ngOnInit() {
		let search:any;
		search = new Object({
			dateTo: new Date(),
			dateFrom: new Date(),
			buy: null,
			sell: null,
			commodity: null,
			counterParty: null,
			location: null
		});
		search.dateFrom.setDate(search.dateFrom.getDate()-2);
		this.getTrades(search);
		//this.trades = this.searchResults;
	}

	getTrades(search) {
		this.searchService.PerformSearch(search).subscribe(
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
				//console.log("Notification Received:", response);
			},
			error => console.error(error),
			() => {
				console.log("New Trades. Notification Received. Type:", newTrade["Text"], newTrade);
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
		console.log("Notif: New Trade Added", newTrade, "Before Adding:", this.trades);
		this.trades.unshift(newTrade);
		console.log("Notif: New Trade Added", newTrade, "After Adding:", this.trades);
	}
	
	updateTradeTable(trade) {
		console.log(trade);
		console.log("At Update",this.trades);
		let index:number = this.trades.findIndex(a=>a.Id == trade.Id);
		this.trades[index] = trade;
		console.log("After Update",this.trades);
	}

	deleteFromTable(trade) {
		this.trades = this.trades.filter((findTrade) => { return findTrade.Id != trade.Id });
		console.log("delete");
	}
	detailRequest(trade: TradeTable, row: number) {
		this.selectedRow = row;
		this.tradeEmit.emit(trade);
	}
	
}

