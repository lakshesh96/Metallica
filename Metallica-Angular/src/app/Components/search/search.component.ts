import { Component, OnInit } from '@angular/core';
import { ReferenceDataService } from '../../Services/ReferenceData/reference-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	commodity: any[];
	location: any[];
	counterParty: any[];

	dateFrom: Date = new Date();
	dateTo: Date = new Date();
    settings = {
        bigBanner: false,
		timePicker: true,
		format: 'd MMM yy',
        //format: 'yyyy-MM-ddTHH:mm:ss.sssZ',
		defaultOpen: false,
		closeOnSelect: true
    }
	
	constructor(public referenceDataService: ReferenceDataService) { 
		// this.commodity = referenceDataService.getReferenceData("Commodities");
		// console.log("Search Commodity:", this.commodity);
	}

	ngOnInit() { }

	onDateSelect(ev) {
		console.log(ev);
		console.log(this.dateFrom);
		console.log(this.dateTo);
	}
}
