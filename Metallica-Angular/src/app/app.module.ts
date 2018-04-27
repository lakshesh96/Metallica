import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import Components
import { AppComponent } from './app.component';

// Import Services

@NgModule({
	declarations: [
		AppComponent
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
