import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReferenceDataService } from '../../Services/ReferenceData/reference-data.service';
import { SearchService } from '../../Services/Search/search.service';
import { TradeTableComponent } from '../trade-table/trade-table.component';
import { GlobalService } from '../../Services/GlobalService/global.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	@Output() searchEmit = new EventEmitter<any[]>();

	searchForm = new FormGroup({
		dateFrom: new FormControl(),
		dateTo: new FormControl(),
		buy: new FormControl(),
		sell: new FormControl(),
		commodity: new FormControl(),
		counterParty: new FormControl(),
		location: new FormControl()
	});

	commodities: any[];
	locations: any[];
	counterParties: any[];
	
	constructor(public searchService: SearchService, public globalService: GlobalService) { 
		this.commodities = globalService.getReferenceData("Commodities");
		this.locations = globalService.getReferenceData("Locations");
		this.counterParties = globalService.getReferenceData("CounterParties");
	}

	ngOnInit() { }

	onSubmit(data) {
		if (data.value.dateFrom != null && data.value.dateTo != null) {
			let dateFrom: Date = new Date(data.value.dateFrom);
			let dateTo: Date = new Date(data.value.dateTo);

			if (dateFrom > dateTo) {
				alert("'From' Date cannot be greater than or equal to the 'To' Date");
				return;
			}

			data.value.dateFrom = dateFrom.toISOString();
			data.value.dateTo = dateTo.toISOString();
		} else {
			data.value.dateFrom = null;
			data.value.dateTo = null;
		}
		
		console.log("Search object created:", data.value);
		let trades: any[];
		this.searchService.PerformSearch(data.value).subscribe(
			response => trades = response,
			error => console.error(error),
			() => {
				console.log("Search Data Received:", trades);
				this.searchEmit.emit(trades);
			}
		);
	}
}
