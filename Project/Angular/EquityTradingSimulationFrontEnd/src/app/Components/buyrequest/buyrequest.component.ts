import { Component, OnInit } from '@angular/core';
import {Buy} from '../../Models/buy';
import {Stocks} from '../../Models/stocks';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { BuySellService } from "../../Services/buy-sell/buy-sell.service";
import{Sellmodel} from "../../Models/sell"

@Component({
  selector: 'app-buyrequest',
  templateUrl: './buyrequest.component.html',
  styleUrls: ['./buyrequest.component.css']
})
export class BuyrequestComponent implements OnInit {
buy:FormGroup;
order:Stocks;

  constructor(private bs:BuySellService) {
   this.order = this.bs.buyorder;
  }

  ngOnInit() {
    this.buy = new FormGroup({
      Quantity: new FormControl('', [Validators.required]),
      CurrentPrice:new FormControl('', [Validators.required]),
      LimitPrice:new FormControl('', [Validators.required]),
      StopLoss:new FormControl('',[Validators.required])
      });
  }
  onSubmit({ value, valid }: { value:Sellmodel, valid: boolean }) {
    console.log(value, valid);
    }
  Limit:boolean =true;
  Stop:boolean =true;
  
  Toggle(value){
    if(value=="Stop"){
      this.Stop = false;
      this.Limit =true;
    }
    else if(value=="Limit")
      {
        this.Limit = false;
        this.Stop=true;
      }
    else if(value=="StopLimit"){
      this.Limit = false;
    this.Stop = false;}
    else if(value=="Market"){
      this.Limit = true;
      this.Stop=true;
    }
  
  else{
  
  }
  
  }

  Add(b){
    this.bs.AddBuyOrder(b).subscribe(
      response => response,
      error => console.error(error),
      ()=> alert("Buy Executed")
  );
  }
}
