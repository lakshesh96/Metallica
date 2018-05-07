import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{

	constructor(private router:Router) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		if (sessionStorage.getItem('AccessToken')) {
			return true;
		}
		this.router.navigate(['Login'], { queryParams: { returnUrl: state.url }});
		return false;
	}
}
