import { Injectable } from '@angular/core';
import { CurrentPosition } from "../../Models/current-position"
import { GlobalService } from '../../Services/global.service';
import { Stocks } from "../../Models/stocks"

@Injectable()
export class CurrentPositionService {

	CurrentS : CurrentPosition[];

	//url = "http://localhost:52705/api/Position/Approved?userId=";
	url = "api/Position/Approved?userId=";

	constructor(private globalService: GlobalService) { }

	GetPosition(){
		let userId = sessionStorage.getItem("UserId");
		console.log("Current Position for UserId:", userId, "| API:", this.url);
		return this.globalService.GetMethod(this.url + userId);
	}
}