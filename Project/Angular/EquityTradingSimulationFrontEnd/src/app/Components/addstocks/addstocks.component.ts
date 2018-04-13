import { Component, OnInit } from '@angular/core';
import { ListService } from '../../Services/list-service/list.service';

@Component({
  selector: 'app-addstocks',
  templateUrl: './addstocks.component.html',
  styleUrls: ['./addstocks.component.css']
})
export class AddstocksComponent implements OnInit {
users:any[];
trader:any[]=[];
  constructor(
    private listservice:ListService
    
  ) { }

showtraders(){
this.users=this.listservice.users;
console.log(this.users);

for (let i = 0; i < this.users.length; i++) {
  
  const element = this.users[i];
  
  if (element.Type==1) {
    console.log(element);
    
    this.trader.push(this.users[i]);
    
    
  }
}
}

  ngOnInit() {
  }

  

}
