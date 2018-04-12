import {RouterModule,Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { LoginComponent } from '../Components/login/login.component';
import { RegisterComponent } from '../Components/register/register.component';
import { AdminloginComponent } from '../Components/adminlogin/adminlogin.component';
import { BlockCreationComponent } from '../Components/block-creation/block-creation.component';
import { BuyrequestComponent } from '../Components/buyrequest/buyrequest.component';
import { AdminStockManageComponent } from '../Components/admin-stock-manage/admin-stock-manage.component';
import{SearchComponent} from '../Components/search/search.component';
import { AdminPortfoliomanagerAddComponent } from '../Components/admin-portfoliomanager-add/admin-portfoliomanager-add.component';
import { AdminTraderAddComponent } from '../Components/admin-trader-add/admin-trader-add.component';
import { CurrentPositionComponent } from '../Components/current-position/current-position.component';
import { PendingOrdersComponent } from '../Components/pending-orders/pending-orders.component';
import { Login } from '../Models/login';
import { AuthGuardService } from '../Services/Auth-Guard/auth-guard.service';
import { SellRequestComponent } from '../Components/sell-request/sell-request.component';


const AppRoutes:Routes = [
    { path:"Login",component:LoginComponent},
    {path:"Register",component:RegisterComponent},
    {path:"AdminLogin",component:AdminloginComponent,
        children:[
            {path:"Stocks",component:AdminStockManageComponent},
            {path:"PortflioManager",component:AdminPortfoliomanagerAddComponent},
            {path:"Trader",component:AdminTraderAddComponent}
            ]
    },
    {path:"Blocks",component:BlockCreationComponent,canActivate: [AuthGuardService]},
    {path:"Buy",component:BuyrequestComponent,canActivate: [AuthGuardService]},
    {path:"CurrentPosition",component:CurrentPositionComponent,canActivate: [AuthGuardService]},
    {path:"PendingOrders",component:PendingOrdersComponent,canActivate: [AuthGuardService]},
    {path:"Search" ,component:SearchComponent,canActivate: [AuthGuardService]},
    {path:"",component:RegisterComponent,canActivate: [AuthGuardService]},
    {path:"*",component:LoginComponent,canActivate: [AuthGuardService]},
    {path:"Sell/:id",component:SellRequestComponent}
]
@NgModule({
imports : [RouterModule.forRoot(AppRoutes)],
exports :[RouterModule] 
})
export class RoutesModule{

}
