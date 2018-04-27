import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
 
@Injectable()
export class AuthGuardService implements CanActivate {
 
    constructor(private router: Router) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (sessionStorage.getItem('UserId') && sessionStorage.getItem('Type') == 'Trader') {
            return true;
        }
 
        // not logged in so redirect to login page with the return url and return false
        this.router.navigate(['Trader/Login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}