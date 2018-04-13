import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardPortfolioService implements CanActivate{
  
  constructor(private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (sessionStorage.getItem('UserId')) {
      return true;
    }
  
    this.router.navigate(['Portfoliomanager/Login'], { queryParams: { returnUrl: state.url }});
      return false;
  }
}
