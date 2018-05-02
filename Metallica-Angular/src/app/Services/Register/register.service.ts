import { Injectable } from '@angular/core';
import {Register} from '../../Models/register';
import {GlobalService} from '../GlobalService/global.service';

@Injectable()
export class RegisterService {

  constructor(private globalService: GlobalService) { }

  register:Register;

  /*url = "http://localhost:52705/api/Users/PutList";
  url1:string="http://localhost:52705/api/Users";*/

  url:string = "api/Users/PutList";
  url1:string="api/Users";
 
  
  users:any[];
  status:string;

  Add(r:Register){
    console.log(r);
    let b: any = [{FirstName: r.FirstName, LastName: r.LastName, Email: r.Email, UserName: r.UserName, Password: r.Userpass.Password}]
    console.log("before service");
    console.log(b);
    this.globalService.PostMethod(b,this.url).subscribe(
      response => this.status = response,
      error => console.error(error),
      () => console.log(console.log(this.status + "Hello"))
    );
  }

  GetUsers(){
    this.globalService.GetMethod(this.url1).subscribe(
      response => this.users = response,
      error => console.error(error),
      () => console.log()
    );
  }

}
