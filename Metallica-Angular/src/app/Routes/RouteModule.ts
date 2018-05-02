import {RouterModule,Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { LoginComponent } from '../Components/login/login.component';
import { Login } from '../Models/login';
import { MainComponent } from '../Components/main/main.component';
import {AuthGuardService} from '../Services/AuthGuard/auth-guard.service';
import { LoginOauthComponent } from '../Components/login-oauth/login-oauth.component';

const AppRoutes:Routes = [
    {path:"Register",component:LoginComponent},
    {path:"Login",component:LoginOauthComponent},
    {path:"Main",component:MainComponent,canActivate: [AuthGuardService]},
    {path:"",component:LoginOauthComponent},
    {path:"**",component:LoginOauthComponent}
   
   
];
@NgModule({
imports : [RouterModule.forRoot(AppRoutes)],
exports :[RouterModule] 
})
export class RoutesModule{

}
