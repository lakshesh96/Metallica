import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BlockCreationComponent } from './Components/block-creation/block-creation.component';


@NgModule({
  declarations: [
    AppComponent,
    BlockCreationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
