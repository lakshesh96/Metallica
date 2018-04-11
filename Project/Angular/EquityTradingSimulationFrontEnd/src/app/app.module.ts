import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BlockCreationComponent } from './Components/block-creation/block-creation.component';
import { LoginComponent } from './Components/login/login.component';
import { AdminloginComponent } from './Components/adminlogin/adminlogin.component';

import {GlobalService} from "./Services/global.service";
import {HttpModule, JsonpModule} from '@angular/http';

import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BlockCreationComponent,
    LoginComponent,
    AdminloginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    JsonpModule,
  ],
  providers: [GlobalService],
  bootstrap: [AdminloginComponent]
})
export class AppModule { }
