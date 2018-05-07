import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { TradeTableService } from "../../Services/tradeTable/trade-table.service";
import { TradeTable } from '../../Models/trade-table';
import { Router } from '@angular/router';
import { SearchService } from '../../Services/Search/search.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-trade-table',
  templateUrl: './trade-table.component.html',
  styleUrls: ['./trade-table.component.css']
})
export class TradeTableComponent implements OnInit,OnChanges {

	@Input() trades: any[];
	@Output() tradeEmit = new EventEmitter<TradeTable>();
	@Input() rowHighlightToggle:number;

	constructor(private tradeService: TradeTableService,public router:Router,public searchService:SearchService, private toastr: ToastrService) { }
	
	selectedRow: number;
	url : string = "/api/trades";

	ngOnChanges() {
		if(this.rowHighlightToggle != null && this.rowHighlightToggle == -1)
		{
			this.selectedRow = -1;
		}
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
	}

	getTrades(search) {
		this.searchService.PerformSearch(search).subscribe(
			response => this.trades = response,
			error => console.error(error),
			() => {
				this.updateNewTrades();
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
			},
			error => console.error(error),
			() => {
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
		this.toastr.success('Trade Added Successfully','Success!');
	}
	
	updateTradeTable(trade) {
		let index:number = this.trades.findIndex(a=>a.Id == trade.Id);
		this.trades[index] = trade;
		this.toastr.info('Trade Updated Successfully','Success!');
				
	}

	deleteFromTable(trade) {
		this.trades = this.trades.filter((findTrade) => { return findTrade.Id != trade.Id });
		this.toastr.info('Trade Deleted Successfully','Success!');
	}
	detailRequest(trade: TradeTable, row: number) {
		this.selectedRow = row;
		this.tradeEmit.emit(trade);
	}
	
}

