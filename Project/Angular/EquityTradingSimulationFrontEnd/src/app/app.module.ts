import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import {GlobalService} from "./Services/global.service";


//Components
import { AppComponent } from './app.component';
import { BlockCreationComponent } from './Components/block-creation/block-creation.component';
import { LoginComponent } from './Components/login/login.component';
import { AdminloginComponent } from './Components/adminlogin/adminlogin.component';
import { BuyrequestComponent } from './Components/buyrequest/buyrequest.component';
import { RoutesModule } from './Routes/route-module';
import { RegisterComponent } from './Components/register/register.component';
import { AdminStockManageComponent } from './Components/admin-stock-manage/admin-stock-manage.component';
import { SearchComponent } from './Components/search/search.component';
import { AdminTraderAddComponent } from './Components/admin-trader-add/admin-trader-add.component';
import { AdminPortfoliomanagerAddComponent } from './Components/admin-portfoliomanager-add/admin-portfoliomanager-add.component';


//Services
import { ExceltojsonService } from './Services/exceltojson/exceltojson.service';
import { AdminstocksService } from './Services/adminstocks/adminstocks.service';
import { StocksService } from './Services/StocksList/stocks.service';
import { AddStockAdminService } from './Services/add-stock-admin/add-stock-admin.service';
import { ListService } from './Services/list-service/list.service';
import { AddTraderAdminService } from './Services/add-trader-admin/add-trader-admin.service';
import { AddPmAdminService } from './Services/add-pm-admin/add-pm-admin.service';
import { PendingListService } from './Services/Pending/pending-list.service';
import { BlockserviceService } from './Services/blockservice/blockservice.service';
import { PendingOrdersComponent } from './Components/pending-orders/pending-orders.component';




@NgModule({
  declarations: [
    AppComponent,
    BlockCreationComponent,
    LoginComponent,
    AdminloginComponent,
    BuyrequestComponent,
    RegisterComponent,
    AdminStockManageComponent,
    SearchComponent,
    AdminTraderAddComponent,
    AdminPortfoliomanagerAddComponent,
    PendingOrdersComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RoutesModule
  ],
  providers: [
    GlobalService,
    ExceltojsonService,
    AdminstocksService,
    StocksService,
    AddStockAdminService,
    ListService,
    AddTraderAdminService,
    AddPmAdminService,
    PendingListService,
    BlockserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
