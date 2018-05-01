import { Injectable } from '@angular/core';
import { GlobalService } from '../GlobalService/global.service';

@Injectable()
export class PriceTickerService {

  	constructor(public globalService: GlobalService) { }

	refDataUrl = "/api/RefData";
	tickerNotifUrl = "/api/TickerNotification";

	GetFullCommodityList() {
		return this.globalService.GetMethod(this.refDataUrl);
	}

	GetCommodityUpdates() {
		return this.globalService.GetMethod(this.tickerNotifUrl);
	}
}
