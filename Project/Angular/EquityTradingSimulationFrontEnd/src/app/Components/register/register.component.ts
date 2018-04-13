import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {Regmodel} from '../../Models/regmodel';
import { AbstractControl } from "@angular/forms/forms";
import { ListService } from "../../Services/list-service/list.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:FormGroup;
  model:Regmodel;
  constructor(private service:ListService) { }

 /* AddReg(Id,Name,Username,Password,Cpassword,Empid){
    this.model.Id=Id;
    this.model.Name=Name;
    this.model.Username=Username;
    this.model.Userpass.Password=Password;
    this.model.Userpass.Cpassword=Cpassword;
    this.model.Empid=Empid;
    this.service.Add(this.model);
  }
*/
AddReg(item)
{
  console.log("Hi there");
  console.log(item.value);
  
  this.service.Add(item.value);
  
}
  ngOnInit() {
    this.register = new FormGroup({
    Type: new FormControl('', [Validators.required]),
    Name:new FormControl('',[Validators.required,Validators.minLength(5)]),
    Empid:new FormControl('',[Validators.required,Validators.pattern("[0-9]{1,}")]),
    Username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
      Userpass: new FormGroup({
          Password: new FormControl('', [Validators.required,Validators.pattern("[A-Z]{1}.*[0-9]{1}.*[0-9]{1}"),Validators.minLength(5)]),
          Cpassword: new FormControl('', [Validators.required,Validators.pattern("[A-Z]{1}.*[0-9]{1}.*[0-9]{1}"),Validators.minLength(5)])
      },Matcher)
    
    });
    }

onSubmit({ value, valid }: { value: Regmodel, valid: boolean }) {

console.log(value, valid);
}
} 

export const Matcher = 
(control: AbstractControl): {[key: string]: boolean} => {
  
const Password = control.get('Password');
  
const Cpassword = control.get('Cpassword');
  
if (!Password || !Cpassword) {
   
 return null;
  }
 
 return Password.value === Cpassword.value ? null : { nomatch: true };
};
