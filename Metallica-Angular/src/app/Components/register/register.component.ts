import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { Register } from '../../Models/register';
import { RegisterService } from '../../Services/Register/register.service';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
declare var $:any;


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register : FormGroup;
  status:string;
  constructor(private registerService: RegisterService, private router:Router) { }

  //Alert Modal Variables
	title:string;
	body:string;
	bodyDetails:string;
	alertSource:string;
	alertHidden:boolean = true;
	parentSubject:Subject<any> = new Subject();

  ngOnInit() {
    this.register = new FormGroup({
      FirstName:new FormControl('', [Validators.required]),
      LastName:new FormControl('', [Validators.required]),
      Email:new FormControl('', [Validators.required]),
      UserName:new FormControl('', [Validators.required, Validators.minLength(2),Validators.maxLength(20)]),
      Userpass: new FormGroup({
          Password: new FormControl('', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/),Validators.minLength(8)]),
          ConfirmPassword: new FormControl('', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/),Validators.minLength(8)])
      })
  });
  }
  onSubmit({ value, valid }: { value: Register, valid: boolean }) {
}

AddUser(item) {
  this.registerService.Add(item.value).subscribe(
    response => {
      this.status = response
    },
    error => {
			this.throwAlert("Registration Failed","Username already exists!","Please provide another username.","Error");
    },
    () => {
			this.throwAlert("Register Successfully!","User has been successfully registerd.","Press OK to continue","Success");      
    }
  );

  
}

throwAlert(title,body,bodyDetails,alertSource){
  this.alertHidden = false;
  this.title = title;
  this.body = body;
  this.bodyDetails = bodyDetails;
  this.alertSource = alertSource;
  this.parentSubject.next();
}

closeAlertRoute(value){
  if(value)
    this.router.navigateByUrl('Login');
}
}