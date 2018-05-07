import { Injectable } from '@angular/core';
import {Register} from '../../Models/register';
import {GlobalService} from '../GlobalService/global.service';
import { Router } from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class RegisterService {

  constructor(private globalService: GlobalService, private router: Router) { }

  register:Register;
  url:string="/api/Users";
  status:string;

  Add(user:Register){
    let userModel: any = [{FirstName: user.FirstName, LastName: user.LastName, Email:user.Email,Password: Md5.hashStr(user.Userpass.Password), UserName: user.UserName}];
    return this.globalService.PostRegister(userModel[0],this.url);
  }
}
