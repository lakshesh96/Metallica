import { Injectable } from '@angular/core';
import { GlobalService } from '../GlobalService/global.service';

@Injectable()
export class SearchService {

	url: string = "/api/Filter";

	constructor(public globalService: GlobalService) { }

	PerformSearch(search) {
		return this.globalService.PostMethod(search, this.url);
	}
}
