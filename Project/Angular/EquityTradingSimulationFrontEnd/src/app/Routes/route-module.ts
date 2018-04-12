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
    {path:"Blocks",component:BlockCreationComponent},
    {path:"Buy",component:BuyrequestComponent},
    {path:"CurrentPosition",component:CurrentPositionComponent},
    {path:"PendingOrders",component:PendingOrdersComponent},
    {path:"Search" ,component:SearchComponent},
    {path:"",component:CurrentPositionComponent},
    {path:"*",component:CurrentPositionComponent}
]
@NgModule({
imports : [RouterModule.forRoot(AppRoutes)],
exports :[RouterModule] 
})
export class RoutesModule{

}
