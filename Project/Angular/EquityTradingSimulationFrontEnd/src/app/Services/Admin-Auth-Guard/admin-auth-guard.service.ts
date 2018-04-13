import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (sessionStorage.getItem('AdminId')) {
      return true;
    }

    // not logged in so redirect to login page with the return url and return false
    this.router.navigate(['Admin/AdminLogin'], { queryParams: { returnUrl: state.url }});
    return false;

  }

}
