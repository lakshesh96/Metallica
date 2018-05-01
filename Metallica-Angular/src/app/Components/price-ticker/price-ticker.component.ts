import { Component, OnInit } from '@angular/core';
import { Commodity } from '../../Models/commodity';
import { PriceTickerService } from '../../Services/PriceTickerService/price-ticker.service';

@Component({
  selector: 'app-price-ticker',
  templateUrl: './price-ticker.component.html',
  styleUrls: ['./price-ticker.component.css']
})
export class PriceTickerComponent implements OnInit {

	commodityList: Commodity[] = [];
  	constructor(public priceTickerService: PriceTickerService) { }

	ngOnInit() {
		this.priceTickerService.GetCommodity().subscribe(
			response => this.commodityList = response,
			error => console.error(error),
			() => console.log("Price Ticker. Commodities Received:", this.commodityList)
		);
	}
}
