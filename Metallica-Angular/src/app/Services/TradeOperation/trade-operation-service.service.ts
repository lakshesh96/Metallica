import { Injectable } from '@angular/core';
import {TradeTable} from '../../models/trade-table';
import {GlobalService} from '../GlobalService/global.service';
import { Router } from '@angular/router';

@Injectable()
export class TradeOperationService {

	TradeList: TradeTable[];
	constructor(private globalService: GlobalService,private router:Router) { }

	trade: TradeTable;
	url: string = "/api/Trades";
	status;

	Add(trade:TradeTable) {
		this.globalService.PostMethod(trade,this.url).subscribe(
			response => this.status = response,
			error => console.error(error),
			() => { }
    );
  }
  Edit(trade:TradeTable){
      this.globalService.PutMethod(trade,this.url).subscribe(
        response => this.status = response,
				error => {
					console.error(error);
					alert("Error");
				},
        () => { }
      );
	}
	Delete(trade:TradeTable){
		this.globalService.PostMethod(trade,this.url+"/Remove").subscribe(
			response => this.status = response,
			error => {
				console.error(error);
				alert("Error");
			},
			() => { }
		);
	}
}

