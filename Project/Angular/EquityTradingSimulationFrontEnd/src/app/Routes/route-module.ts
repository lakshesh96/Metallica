import {RouterModule,Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { LoginComponent } from '../Components/login/login.component';
import { RegisterComponent } from '../Components/register/register.component';
import { AdminloginComponent } from '../Components/adminlogin/adminlogin.component';
import { BlockCreationComponent } from '../Components/block-creation/block-creation.component';
import { BuyrequestComponent } from '../Components/buyrequest/buyrequest.component';
import { AdminStockManageComponent } from '../Components/admin-stock-manage/admin-stock-manage.component';
import{SearchComponent} from '../Components/search/search.component';


const AppRoutes:Routes = [
    { path:"Login",component:LoginComponent},
    {path:"Register",component:RegisterComponent},
    {path:"AdminLogin",component:AdminloginComponent,
        children:[
            {path:"Stocks",component:AdminStockManageComponent}
            ]
    },
    {path:"Blocks",component:BlockCreationComponent},
    {path:"Buy",component:BuyrequestComponent},
    {path:"Search" ,component:SearchComponent}
]
@NgModule({
imports : [RouterModule.forRoot(AppRoutes)],
exports :[RouterModule] 
})
export class RoutesModule{

}
