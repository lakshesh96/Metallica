import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BlockCreationComponent } from './Components/block-creation/block-creation.component';

import {GlobalService} from "./Services/global.service";


@NgModule({
  declarations: [
    AppComponent,
    BlockCreationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
