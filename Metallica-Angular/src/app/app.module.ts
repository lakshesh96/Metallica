import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from "angular5-social-login";
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';


// Import Components
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { TradeTableService } from "../app/Services/tradeTable/trade-table.service";
//import {TradeOperationService} from "./Services/TradeOperation/trade-operation-service.service"

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("351844398119-1snsmgp63bgma6vo71sj5lgfskl48f64")
        }
      ]
    )
  return config;
}
import { AddTradeComponent } from './components/add-trade/add-trade.component';
import { EditTradeComponent } from './components/edit-trade/edit-trade.component';
import { TradeDetailsComponent } from './components/trade-details/trade-details.component';
import { PriceTickerComponent } from './Components/price-ticker/price-ticker.component';
import { TradeTableComponent } from './Components/trade-table/trade-table.component';
import { LoginOauthComponent } from './Components/login-oauth/login-oauth.component';


// Import Services
import { GlobalService } from './Services/GlobalService/global.service';
import { PriceTickerService } from './Services/PriceTickerService/price-ticker.service';
import { ReferenceDataService } from './Services/ReferenceData/reference-data.service';
import { SearchComponent } from './Components/search/search.component';
import { MainComponent } from './Components/main/main.component';
import { RoutesModule } from './Routes/RouteModule';
import { SearchService } from './Services/Search/search.service';

@NgModule({
	declarations: [
    AppComponent,
		AddTradeComponent,
		EditTradeComponent,
        TradeDetailsComponent,
        TradeTableComponent,
        LoginComponent,
        PriceTickerComponent,
        LoginOauthComponent,
        SearchComponent,
        MainComponent
	],
	imports: [
    BrowserModule,
    SocialLoginModule,
    FormsModule,
		ReactiveFormsModule,
		HttpModule,
		JsonpModule,
		AngularDateTimePickerModule,
		RoutesModule
	],
    providers: [
		GlobalService,
		{
        	provide: AuthServiceConfig,
        	useFactory: getAuthServiceConfigs
		}, 
		//TradeOperationService
		TradeTableService,
		PriceTickerService,
		ReferenceDataService,
		SearchService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }