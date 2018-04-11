import { Component, OnInit } from '@angular/core';
import {Admin} from '../../Models/admin';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  admin:FormGroup;
  url:"";
  constructor(/*private globalService:ApiDataService*/) { }

  ngOnInit() {
    this.admin = new FormGroup({
      Username: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required])
    });
  }
  onSubmit({ value, valid }: { value: Admin, valid: boolean }) {
    console.log(value, valid);

    let data: any = {AdminUserName: value.Username, AdminPass: value.Password, URL: this.url}
    
    /*this.globalService.StoreAdminDetails(data).subscribe(
      response => value=response,
      error => console.error(error),
      () => console.log()
    );*/
     
  }
}
