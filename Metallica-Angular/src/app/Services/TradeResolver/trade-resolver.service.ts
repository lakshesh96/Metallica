import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot,Resolve } from '@angular/router';
import { TradeOperationService } from '../TradeOperation/trade-operation-service.service';

@Injectable()
export class TradeResolverService {
  trade=null;
  constructor(private tradeService:TradeOperationService) { }
    resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ) {
      console.log(this.tradeService.trade);
      return this.tradeService.trade;
    
  }

}

