import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

@Injectable()
export class TradeResolverService {
	trade=null;
	constructor() { }
	
	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
    ) {
		return this.trade;
  	}
}

