import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { Register } from '../../Models/register';
import { RegisterService } from '../../Services/Register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register : FormGroup;
  constructor(private service: RegisterService) { }

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

AddUser(item) {
  console.log("Hi there");
  console.log(item.value);
  this.service.Add(item.value);
}
}