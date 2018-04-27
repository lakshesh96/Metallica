import { Component, OnInit } from '@angular/core';
import {Admin} from '../../Models/admin';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {GlobalService} from '../../Services/global.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  admin:FormGroup;
  //url = "http://localhost:52705/api/Admin";
  url:string = "api/Admin";
  value2:string;
  id:string;

  constructor(private globalService:GlobalService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.admin = new FormGroup({
      Username: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required])
    });
  }
  onSubmit({ value, valid }: { value: Admin, valid: boolean }) {

    this.globalService.PostMethod(value,this.url).subscribe(
      response => {
          this.id=response.id;
          sessionStorage.setItem("AdminLogin",response.response);

          if(response.response == true){
            this.router.navigateByUrl('Admin/Stocks');
          }
          else{
            window.alert("Wrong Credentials!");
          }
        },
      error => console.error(error),
      () => {
      },
    );
    // console.log(this.value2);
    // sessionStorage.setItem("AdminId",this.value2);
     
  }
}
