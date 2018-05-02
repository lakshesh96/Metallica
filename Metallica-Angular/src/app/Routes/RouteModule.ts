import {RouterModule,Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { LoginComponent } from '../Components/login/login.component';
import { Login } from '../Models/login';
import { Register } from '../Models/register';
import { MainComponent } from '../Components/main/main.component';
import { RegisterComponent } from '../Components/register/register.component';

const AppRoutes:Routes = [
    {path:"Register",component:RegisterComponent},
    {path:"Login",component:LoginComponent},
    {path:"Main",component:MainComponent},
    {path:"",component:LoginComponent},
    {path:"**",component:LoginComponent}
   
   
];
@NgModule({
	imports : [RouterModule.forRoot(AppRoutes)],
	exports :[RouterModule] 
})
export class RoutesModule{

}
