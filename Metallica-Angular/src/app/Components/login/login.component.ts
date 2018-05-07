import {Component, OnInit} from '@angular/core';
import {
    AuthService,
    GoogleLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private socialAuthService: AuthService) {}
  public socialSignIn() {
    let socialPlatformProvider;
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        //console.log(" sign in data : " , userData);
      }
    );
  }

  ngOnInit() {
  }

}
