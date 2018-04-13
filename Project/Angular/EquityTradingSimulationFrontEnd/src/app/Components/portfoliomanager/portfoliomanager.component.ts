import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfoliomanager',
  templateUrl: './portfoliomanager.component.html',
  styleUrls: ['./portfoliomanager.component.css']
})
export class PortfoliomanagerComponent implements OnInit {
  UserId=null;
  x:boolean=true;
  constructor() { }

  ngOnInit() {
    this.UserId = sessionStorage.getItem("UserId");
   
    if(this.UserId)
    {
      this.x=!this.x;
     }
  }
  Show()
  {
    sessionStorage.removeItem("UserId");
    this.x=!this.x;
  }
}
