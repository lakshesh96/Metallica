import { Component, OnInit } from '@angular/core';
import {Buy} from '../../Models/buy';
import { FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-buyrequest',
  templateUrl: './buyrequest.component.html',
  styleUrls: ['./buyrequest.component.css']
})
export class BuyrequestComponent implements OnInit {
buy:FormGroup;

  constructor() { }

  ngOnInit() {
    this.buy = new FormGroup({
      Quantity: new FormControl('', [Validators.required]),
     
      
    });
  }
  onSubmit({ value, valid }: { value: Buy, valid: boolean }) {
    console.log(value, valid);
  }
}
