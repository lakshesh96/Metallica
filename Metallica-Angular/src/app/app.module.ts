import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from "angular5-social-login";

// Import Components
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
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


// Import Services

@NgModule({
	declarations: [
		AppComponent,
		AddTradeComponent,
		EditTradeComponent,
        TradeDetailsComponent,
        TradeTableComponent,
        LoginComponent,
        PriceTickerComponent
	],
	imports: [
        BrowserModule,
        SocialLoginModule
	],
    providers: [{
        provide: AuthServiceConfig,
        useFactory: getAuthServiceConfigs
    }],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
