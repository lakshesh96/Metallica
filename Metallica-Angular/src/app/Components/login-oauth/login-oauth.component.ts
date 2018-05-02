import { Component, OnInit } from '@angular/core';
import {Login} from '../../Models/login';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {GlobalService} from '../../Services/GlobalService/global.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Headers} from '@angular/http';
import { HttpParams } from '@angular/common/http';


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
  
	url:string = "/token";

	UserId = null;
	x:boolean =true;

	AccessToken:string;
	//headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
	//headers = { 'Content-Type': 'application/x-www-form-urlencoded' } ;	
	headers:Headers;

  constructor(private globalService:GlobalService,  private route: ActivatedRoute, private router: Router) {
		
	 }

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
		this.loading = true;
		let params = `username=${value.UserName}&password=${value.Password}&grant_type=password`;
		this.headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
	try{
		this.globalService.LoginPost(params,this.url,this.headers).subscribe(
			response => {
				console.log("Response received");
				this.AccessToken = response.access_token;			
				sessionStorage.setItem("AccessToken",this.AccessToken.toString());
				if(this.AccessToken != null){
					this.router.navigateByUrl('Main');
				}
			},
			error => {
				alert("Authentication Failed");
			//console.error(error);
				this.loading = false;
			},
			()=> {
			}
		);
	}
		catch(Exception){
			alert("Authentication Failed");
		}
		
	}

}
