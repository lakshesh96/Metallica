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
	model: any = {};
	loading = false;
  returnUrl: string;
  
	url:string = "api/OAuth";

	id:number;
	UserId = null;
	x:boolean =true;

  constructor() { }

  ngOnInit() {
    this.login = new FormGroup({
			Type: new FormControl('', [Validators.required]),
			UserName: new FormControl('', [Validators.required]),
			Password: new FormControl('', [Validators.required])
		});
		//this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
		this.UserId = sessionStorage.getItem("UserId");

		if(this.UserId) {
			this.x=false;
			//this.navigate(sessionStorage.getItem("Type"));
		}
		else
			this.x = true;
  }

  onSubmit({ value, valid }: { value: Login, valid: boolean }) {
    
	}

}
