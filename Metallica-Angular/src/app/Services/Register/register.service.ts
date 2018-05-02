import { Injectable } from '@angular/core';
import {Register} from '../../Models/register';
import {GlobalService} from '../GlobalService/global.service';
import { Router } from '@angular/router';

@Injectable()
export class RegisterService {

  constructor(private globalService: GlobalService, private router: Router) { }

  register:Register;
  url:string="/api/Users";
  status:string;

  Add(user:Register){
    console.log(user);
    let userModel: any = [{FirstName: user.FirstName, LastName: user.LastName, Email:user.Email,Password: user.Userpass.Password, UserName: user.UserName}]
    console.log("before service");
    console.log(userModel);
    this.globalService.PostRegister(userModel[0],this.url).subscribe(
      response => this.status = response,
      error => console.error(error),
      () => {
        //console.log(console.log(this.status + "Hello"))
        alert("Registered Successfully");
        this.router.navigateByUrl('Login');
      }
    );
  }

}
