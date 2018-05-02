import { Component, OnInit } from '@angular/core';
import { Commodity } from '../../Models/commodity';
import { PriceTickerService } from '../../Services/PriceTickerService/price-ticker.service';
import { ReferenceDataService } from '../../Services/ReferenceData/reference-data.service';

@Component({
	selector: 'app-price-ticker',
	templateUrl: './price-ticker.component.html',
	styleUrls: ['./price-ticker.component.css']
})
export class PriceTickerComponent implements OnInit {

	commodityList: Commodity[] = [];

  	constructor(public priceTickerService: PriceTickerService, public referenceDataService: ReferenceDataService) { 
		//this.commodityList = referenceData["Commodities"];
	}

	ngOnInit() {
		let data: any;
		this.priceTickerService.GetFullCommodityList().subscribe(
			response => data = response,
			error => console.error(error),
			() => {
				this.commodityList = data["Commodities"];
				this.referenceDataService.setRefrenceData(data);
				this.commodityList = this.referenceDataService.getReferenceData("Commodities");
				console.log("Price Ticker. RefData[Commodities] Received:", this.commodityList);
				this.updateTicker();
			}
		);
	}

	updateTicker() {
		console.log("Listening for Commodity Price Updates");
		let commodity: any;
		this.priceTickerService.GetCommodityUpdates().subscribe(
			response => commodity = response,
			error => console.error(error),
			() => {
				console.log("Price Ticker. Notification Received:", commodity);
				if (commodity != null)
					this.updateCommodityPrice(commodity);
				//this.updateTicker();
			}
		);
	}

	updateCommodityPrice(commodity: any) {
		this.commodityList.forEach(element => {
			if (element.Id == commodity.Id) {
				element.Increase = element.CurrentPrice >= commodity.CurrentPrice;
				element.CurrentPrice = commodity.CurrentPrice
			}
		});
	}
}
