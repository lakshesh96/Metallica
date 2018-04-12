import { Injectable } from '@angular/core';
import { Regmodel } from "../../Models/regmodel";
import {GlobalService} from '../../Services/global.service';

@Injectable()
export class ListService {

  constructor(private globalService:GlobalService) { }

  reg:Regmodel;
  url = "http://localhost:52705/api/Users";
  users:any[];

  Add(r:Regmodel){
    console.log(r);
    let b: any = {Name: r.Name, Password: r.Userpass.Password, UserName: r.Username, EmployeeId: r.Empid, Approved:false, Type: r.Type}
    console.log(b);
    this.globalService.PostMethod(b,this.url).subscribe(
      response => response,
      error => console.error(error),
      () => console.log()
    );
  }

  GetUsers(){
    this.globalService.GetMethod(this.url).subscribe(
      response => this.users = response,
      error => console.error(error),
      () => console.log()
    );
  }

}