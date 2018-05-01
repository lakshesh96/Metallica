import { Component, OnInit } from '@angular/core';
import {Login} from '../../Models/login';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-oauth',
  templateUrl: './login-oauth.component.html',
  styleUrls: ['./login-oauth.component.css']
})
export class LoginOauthComponent implements OnInit {

  login:FormGroup;
	//model: any = {};
	loading = false;
  returnUrl: string;
  
	url:string = "api/OAuth";

	id:number;
	UserId = null;
	x:boolean =true;

  constructor() { }

  ngOnInit() {
    this.login = new FormGroup({
			UserName: new FormControl('', [Validators.required,Validators.maxLength(20)]),
      Password: new FormControl('', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/)])
      
		});
		//this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
		//this.UserId = sessionStorage.getItem("UserId");

		if(this.UserId) {
			this.x=false;
			//this.navigate(sessionStorage.getItem("Type"));
		}
		else
			this.x = true;
  }

  onSubmit({ value, valid }: { value: Login, valid: boolean }) {
    console.log(value,valid);
	}

}
