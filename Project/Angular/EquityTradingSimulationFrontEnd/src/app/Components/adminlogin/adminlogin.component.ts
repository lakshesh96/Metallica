import { Component, OnInit } from '@angular/core';
import {Admin} from '../../Models/admin';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {GlobalService} from '../../Services/global.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  admin:FormGroup;
  url:"http://localhost:60061/api/Admin";
  constructor(private globalService:GlobalService) { }

  ngOnInit() {
    this.admin = new FormGroup({
      Username: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required])
    });
  }
  onSubmit({ value, valid }: { value: Admin, valid: boolean }) {
    console.log(value, valid);

    let data: any = {AdminUserName: value.Username, AdminPass: value.Password}

    this.globalService.AuthAdmin(data,this.url).subscribe(
      response => value=response,
      error => console.error(error),
      () => console.log(),
    );
    console.log(value);
     
  }
}
