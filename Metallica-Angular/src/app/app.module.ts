import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import Components
import { AppComponent } from './app.component';
import { AddTradeComponent } from './components/add-trade/add-trade.component';
import { EditTradeComponent } from './components/edit-trade/edit-trade.component';
import { TradeDetailsComponent } from './components/trade-details/trade-details.component';


// Import Services

@NgModule({
	declarations: [
		AppComponent,
		AddTradeComponent,
		EditTradeComponent,
		TradeDetailsComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
