import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReferenceDataService } from '../../Services/ReferenceData/reference-data.service';
import { SearchService } from '../../Services/Search/search.service';
import { TradeTableComponent } from '../trade-table/trade-table.component';
import { GlobalService } from '../../Services/GlobalService/global.service';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	@Output() searchEmit = new EventEmitter<any[]>();

	//Alert Modal Variables
	title:string;
	body:string;
	bodyDetails:string;
	alertSource:string;
	alertHidden:boolean = true;

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
			dateTo.setDate(dateTo.getDate() + 1);

			if (dateFrom >= dateTo) {
				//alert("'From' Date cannot be greater than or equal to the 'To' Date");
				this.throwAlert("Search Failed!","'From' Date cannot be greater than or equal to the 'To' Date","","Success");		
				return;
			}

			data.value.dateFrom = dateFrom.toISOString();
			data.value.dateTo = dateTo.toISOString();
		} else {
			data.value.dateFrom = null;
			data.value.dateTo = null;
		}
		
		let trades: any[];
		this.searchService.PerformSearch(data.value).subscribe(
			response => trades = response,
			error => console.error(error),
			() => {
				this.searchEmit.emit(trades);
			}
		);
	}

	throwAlert(title,body,bodyDetails,alertSource){
		this.alertHidden = false;
		this.title = title;
		this.body = body;
		this.bodyDetails = bodyDetails;
		this.alertSource = alertSource;
		$("#SearchModal").modal();
	}

	closeAlertRoute() {
		console.log("At close Alert:");
		/*if(value)
			this.router.navigateByUrl('Main');*/
	}
}
