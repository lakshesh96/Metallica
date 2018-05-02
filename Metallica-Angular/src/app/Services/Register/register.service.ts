import { Injectable } from '@angular/core';
import {Register} from '../../Models/register';
import {GlobalService} from '../GlobalService/global.service';

@Injectable()
export class RegisterService {

  constructor(private globalService: GlobalService) { }

  register:Register;
  url:string="/api/Users";
  status:string;

  Add(user:Register){
    console.log(user);
    let userModel: any = [{FirstName: user.FirstName, LastName: user.LastName, Email:user.Email,Password: user.Userpass.Password, UserName: user.UserName}]
    console.log("before service");
    console.log(userModel);
    this.globalService.PostMethod(userModel,this.url).subscribe(
      response => this.status = response,
      error => console.error(error),
      () => console.log(console.log(this.status + "Hello"))
    );
  }

}
