import { Component, OnInit } from '@angular/core';
import {Login} from '../../Models/login';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../Services/login/login.service';
import {GlobalService} from '../../Services/global.service';
import { Router, ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup;
  model: any = {};
    loading = false;
    returnUrl: string;
    url:string="http://localhost:52705/api/Users/Login";
    id:number;
  constructor(private globalService:GlobalService,  private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.login = new FormGroup({
      Type: new FormControl('', [Validators.required]),
      UserName: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required])
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  onSubmit({ value, valid }: { value: Login, valid: boolean }) {
    this.loading = true;
    this.globalService.PostMethod(value,this.url).subscribe(
    response => {this.id=response.id;
      console.log(response);
      sessionStorage.setItem("UserId",this.id.toString());
      console.log(sessionStorage.getItem("UserId"));
    },
    error => {console.error(error);
      this.loading = false;
              },
    ()=> this.router.navigateByUrl(this.returnUrl)
  ); 

                    
    //console.log(value, valid);
    
  }
 /* getData() {

    var username = <HTMLInputElement>document.getElementById("username");
    var password = <HTMLInputElement>document.getElementById("password");
    sessionStorage.setItem("Username", username.value);
    sessionStorage.setItem("Password", password.value);
  }*/
}
