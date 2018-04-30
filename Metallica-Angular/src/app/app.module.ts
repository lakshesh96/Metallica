import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from "angular5-social-login";


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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule
  ],
  providers: [{provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs}],
  bootstrap: [AppComponent]
})
export class AppModule { }
