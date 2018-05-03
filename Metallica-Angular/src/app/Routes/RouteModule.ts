import {RouterModule,Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { LoginComponent } from '../Components/login/login.component';
import { Login } from '../Models/login';
import { Register } from '../Models/register';
import { MainComponent } from '../Components/main/main.component';
import { RegisterComponent } from '../Components/register/register.component';
import {AuthGuardService} from '../Services/AuthGuard/auth-guard.service';
import { LoginOauthComponent } from '../Components/login-oauth/login-oauth.component';
import { AddTradeComponent } from '../components/add-trade/add-trade.component';
import { EditTradeComponent } from '../components/edit-trade/edit-trade.component';
import { TradeResolverService } from '../Services/TradeResolver/trade-resolver.service';

const AppRoutes:Routes = [
	{ path: "Register", component: RegisterComponent},
    {path:"Login",component:LoginOauthComponent},
    {path:"Main",component:MainComponent,canActivate: [AuthGuardService],children : [
        {path:"Add",component:AddTradeComponent},
        {path:"Details",component:EditTradeComponent,resolve:{trade:TradeResolverService}}
    ]

    },
    {path:"",component:MainComponent,canActivate: [AuthGuardService]},
    {path:"**",component:MainComponent,canActivate: [AuthGuardService]}
   
   
];
@NgModule({
	imports : [RouterModule.forRoot(AppRoutes)],
	exports :[RouterModule] 
})
export class RoutesModule{

}
