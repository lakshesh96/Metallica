import { Component, OnInit } from '@angular/core';
import {Login} from '../../Models/login';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {GlobalService} from '../../Services/GlobalService/global.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Headers} from '@angular/http';


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
		let body = new URLSearchParams();
		body.set('username', value.UserName);
		body.set('password', value.Password);
		body.set('grant_type', 'password');
		//this.headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
		this.headers = new Headers();
		this.headers.append('content-type', 'application/x-www-form-urlencoded');
	// 	let options = {
	// 		headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
	// };
	
		this.globalService.LoginPost(body,this.url,this.headers).subscribe(
			response => {
				console.log("Response received:");
				console.log(response);
				//if(!response.error){
					this.AccessToken = response.access_token;
				/*}
				else{
					alert("Authentication Failed");
				}*/
				console.log("Access Token:");				
				console.log(this.AccessToken);
				sessionStorage.setItem("AccessToken",this.AccessToken.toString());
			},
			error => {
				console.error(error);
				this.loading = false;
			},
			()=> {
			}
		); 
		
	}

}
