import { Component, OnInit } from '@angular/core';
import {Login} from '../../Models/login';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../Services/login/login.service';
import {GlobalService} from '../../Services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup;
  url = "http://localhost:52705/api/Admin";
  value2:string;

  constructor(private globalService:GlobalService) { }

  ngOnInit() {
    this.login = new FormGroup({
      Type: new FormControl('', [Validators.required]),
      Username: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required])
    });
  }
  onSubmit({ value, valid }: { value: Login, valid: boolean }) {
    //console.log(value, valid);
    // this.globalService.PostMethod(value,this.url).subscribe(
    //   response => this.value2=response,
    //   error => console.error(error),
    //   () => console.log(),
    // );
    
  }
 /* getData() {

    var username = <HTMLInputElement>document.getElementById("username");
    var password = <HTMLInputElement>document.getElementById("password");
    sessionStorage.setItem("Username", username.value);
    sessionStorage.setItem("Password", password.value);
  }*/
}
