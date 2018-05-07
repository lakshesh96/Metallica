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
import { AddTradeComponent } from './components/add-trade/add-trade.component';
import { TradeDetailsComponent } from './components/trade-details/trade-details.component';
import { PriceTickerComponent } from './Components/price-ticker/price-ticker.component';
import { TradeTableComponent } from './Components/trade-table/trade-table.component';
import { LoginOauthComponent } from './Components/login-oauth/login-oauth.component';
import { RegisterComponent } from './Components/register/register.component';

//Toast Modules
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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




// Import Services
import { GlobalService } from './Services/GlobalService/global.service';
import { PriceTickerService } from './Services/PriceTickerService/price-ticker.service';
import { ReferenceDataService } from './Services/ReferenceData/reference-data.service';
import { SearchComponent } from './Components/search/search.component';
import { MainComponent } from './Components/main/main.component';
import { RoutesModule } from './Routes/RouteModule';
import { RegisterService } from './Services/Register/register.service';
import { SearchService } from './Services/Search/search.service';
import {TradeOperationService} from './Services/TradeOperation/trade-operation-service.service';
import { AuthGuardService } from './Services/AuthGuard/auth-guard.service';
import { AlertModalComponent } from './Components/alert-modal/alert-modal.component';
import { TradeTableService } from "../app/Services/tradeTable/trade-table.service";
;

@NgModule({
	declarations: [
    AppComponent,
		AddTradeComponent,
        TradeDetailsComponent,
        TradeTableComponent,
        LoginComponent,
        PriceTickerComponent,
        LoginOauthComponent,
        SearchComponent,
        MainComponent,
        RegisterComponent,
        AlertModalComponent,
	],
	imports: [
    BrowserModule,
    SocialLoginModule,
    FormsModule,
		ReactiveFormsModule,
		HttpModule,
		JsonpModule,
		AngularDateTimePickerModule,
		RoutesModule,
		CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
	],
    providers: [
		GlobalService,
		{
        	provide: AuthServiceConfig,
        	useFactory: getAuthServiceConfigs
		}, 
		TradeOperationService,
		TradeTableService,
		PriceTickerService,
		ReferenceDataService,
		SearchService,
		RegisterService,
		AuthGuardService,
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }