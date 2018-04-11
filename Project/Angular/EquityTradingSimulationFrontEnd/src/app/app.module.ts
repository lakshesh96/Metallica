import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BlockCreationComponent } from './Components/block-creation/block-creation.component';
import { LoginComponent } from './Components/login/login.component';
import { AdminloginComponent } from './Components/adminlogin/adminlogin.component';

import {GlobalService} from "./Services/global.service";
import { ExceltojsonService } from "./Services/exceltojson/exceltojson.service";
import { AdminstocksService } from "./Services/adminstocks/adminstocks.service";
import {HttpModule, JsonpModule} from '@angular/http';

import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AdminStockManageComponent } from './Components/admin-stock-manage/admin-stock-manage.component';


@NgModule({
  declarations: [
    AppComponent,
    BlockCreationComponent,
    LoginComponent,
    AdminloginComponent,
    AdminStockManageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    JsonpModule,
  ],
  providers: [GlobalService,ExceltojsonService,AdminstocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
