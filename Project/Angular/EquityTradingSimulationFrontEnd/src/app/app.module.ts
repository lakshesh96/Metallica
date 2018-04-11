import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BlockCreationComponent } from './Components/block-creation/block-creation.component';
import { LoginComponent } from './Components/login/login.component';
import { AdminloginComponent } from './Components/adminlogin/adminlogin.component';

import {GlobalService} from "./Services/global.service";
import { BuyrequestComponent } from './Components/buyrequest/buyrequest.component';


@NgModule({
  declarations: [
    AppComponent,
    BlockCreationComponent,
    LoginComponent,
    AdminloginComponent,
    BuyrequestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
