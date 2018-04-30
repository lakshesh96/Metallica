import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import Components
import { AppComponent } from './app.component';
import { TradeTableComponent } from './Components/trade-table/trade-table.component';

// Import Services

@NgModule({
	declarations: [
		AppComponent,
		TradeTableComponent
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
