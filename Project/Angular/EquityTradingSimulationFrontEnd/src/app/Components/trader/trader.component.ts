import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trader',
  templateUrl: './trader.component.html',
  styleUrls: ['./trader.component.css']
})
export class TraderComponent implements OnInit {
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
