import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {Register} from '../../Models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register : FormGroup;
  constructor() { }

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
    console.log(value, valid);
}
}
