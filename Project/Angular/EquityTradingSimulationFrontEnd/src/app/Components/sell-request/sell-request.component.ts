import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {SellService} from '../../Services/sell-service/sell.service';
import { BuySellService } from "../../Services/buy-sell/buy-sell.service";
import{CurrentPosition} from "../../Models/current-position";
import { Sellmodel } from "../../Models/sell";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sell-request',
  templateUrl: './sell-request.component.html',
  styleUrls: ['./sell-request.component.css']
})
export class SellRequestComponent implements OnInit {
  id ="";
  sell:FormGroup;
  checked = true;
  model:CurrentPosition;
  constructor(private service:SellService,private bs:BuySellService,private route: ActivatedRoute,) {
    this.model = this.bs.sellorder; 
   }

  Add(sell){
    /*this.model.Quantity=Quantity;
    this.model.CurrentPrice=CurrentPrice;
    this.model.LimitPrice=LimitPrice;
    this.model.Target=Target;
    this.model.StopLoss=StopLoss;
    this.service.Add(this.model);*/
    console.log(sell.value);
  
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.sell = new FormGroup({
      Quantity: new FormControl('', [Validators.required]),
      CurrentPrice:new FormControl('', [Validators.required]),
      LimitPrice:new FormControl('', [Validators.required]),
      StopLoss:new FormControl('',[Validators.required])
      });
  }
  checkboxchanged()
  {
  console.log("hello");
  this.checked = !this.checked;
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

}
