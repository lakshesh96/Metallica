import { Injectable } from '@angular/core';
import { GlobalService } from '../GlobalService/global.service';

@Injectable()
export class PriceTickerService {

  	constructor(public globalService: GlobalService) { }

	url = "api/RefData";

	GetCommodity() {
		return this.globalService.GetMethod(this.url);
	}
}
