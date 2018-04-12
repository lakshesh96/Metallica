import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BlockCreationComponent } from './Components/block-creation/block-creation.component';
import { LoginComponent } from './Components/login/login.component';
import { AdminloginComponent } from './Components/adminlogin/adminlogin.component';
import { BuyrequestComponent } from './Components/buyrequest/buyrequest.component';

import {GlobalService} from "./Services/global.service";
import { ExceltojsonService } from "./Services/exceltojson/exceltojson.service";
import { AdminstocksService } from "./Services/adminstocks/adminstocks.service";
import {AddStockAdminService} from "./Services/add-stock-admin/add-stock-admin.service";
import {ListService } from './Services/list-service/list.service';

import {HttpModule, JsonpModule} from '@angular/http';

import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AdminStockManageComponent } from './Components/admin-stock-manage/admin-stock-manage.component';
import{SearchComponent} from './Components/search/search.component';
import {StocksService} from './Services/stocks.service';
import { RegisterComponent } from '../app/Components/register/register.component';


@NgModule({
	declarations: [
		AppComponent,
		BlockCreationComponent,
		LoginComponent,
		AdminloginComponent,
		AdminStockManageComponent,
		BuyrequestComponent,SearchComponent, RegisterComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		FormsModule,
		HttpModule,
		JsonpModule,
	],
	providers: [
		GlobalService,
		ExceltojsonService,
		AdminstocksService,
		StocksService,
		AddStockAdminService,
		ListService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
