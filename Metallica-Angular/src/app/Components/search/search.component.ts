import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReferenceDataService } from '../../Services/ReferenceData/reference-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

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
	
	constructor() { }

	ngOnInit() { }

	onSubmit(data) {
		if (data.value.dateFrom != null && data.value.dateTo != null) {
			let dateFrom: Date = new Date(data.value.dateFrom);
			let dateTo: Date = new Date(data.value.dateTo);

			if (dateFrom >= dateTo) {
				alert("'From' Date cannot be greater than or equal to the 'To' Date");
			}
		} else {
			data.value.dateFrom = null;
			data.value.dateTo = null;
		}
		console.log(data.value);
	}
}
