import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	commodity: string[] = ["akul", "ishan", "rohan"];

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
	
	constructor() { }

	ngOnInit() { }

	onDateSelect(ev) {
		console.log(ev);
		console.log(this.dateFrom);
		console.log(this.dateTo);
	}
}
