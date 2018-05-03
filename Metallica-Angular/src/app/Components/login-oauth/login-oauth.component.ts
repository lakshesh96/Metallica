import { Component, OnInit } from '@angular/core';
import {Login} from '../../Models/login';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { GlobalService } from '../../Services/GlobalService/global.service';
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

	constructor(private globalService:GlobalService, private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		this.login = new FormGroup({
			UserName: new FormControl('', [Validators.required,Validators.maxLength(20)]),
			Password: new FormControl('', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/)])
		});

		if(this.UserId) 
			this.x=false;
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
					this.AccessToken = response.access_token;	
					console.log("Response Received", this.AccessToken);		
					sessionStorage.setItem("AccessToken",this.AccessToken.toString());
					if(this.AccessToken != null)
						this.loadReferenceData();
				},
				error => {
					alert("Authentication Failed");
					this.loading = false;
				},
				()=> { }
			);
		}
		catch(Exception){
			alert("Authentication Failed");
		}
	}


	loadReferenceData() {
		this.globalService.GetMethod("/api/RefData").subscribe(
			response => {
				this.globalService.setReferenceData(response);
				this.router.navigateByUrl('Main');
			},
			error => console.error(error),
			() => {
				
			}
		);
	}

}
