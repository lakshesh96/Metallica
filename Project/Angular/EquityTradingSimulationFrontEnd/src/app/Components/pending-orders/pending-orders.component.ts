import { Component, OnInit } from '@angular/core';
import {PendingStocks} from '../../Models/pending-stocks';
import {PendingListService} from '../../Services/Pending/pending-list.service';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent implements OnInit 
{
  ListStocks:any[];
  divhide:boolean;
  

  constructor(private PS:PendingListService) {
    this.getOrders();
   }

  ngOnInit()
  {
    
    this.divhide=this.PS.divhide;
  }
  getOrders()
  {
      this.PS.getPendingOrders().subscribe
          (response => {this.ListStocks = response;
            this.ListStocks.forEach(element => {
              this.fetchNameChanges(element);
            });
          },
          error => console.error(error),
          () => { console.info(this.ListStocks) }
      );

      
      
  }
  fetchNameChanges(element)
  {
    if(element.OrderType==0)
     element.OrderType = "";
  }
  /*postdata()
  {
      let p: any = {  };
      alert();
      this.PS.postdata(p).subscribe(
          response => response,
          error => console.error(error),
          () => this.getOrders()
      );
  console.info(p);
  }*/
  /*Put(Id:number,Trader_Name:string,Name:string,Symbol:number,Quantity:number,Buying_Price:number,CurrentPrice:number,
    Total_Value:number,typeoforder:string,side:string, )
  {
      let pt:any={Id:Id,Trader_Name:Trader_Name,Name:Name,Symbol:Symbol, Quantity:Quantity,Buying_Price:Buying_Price,
        CurrentPrice:CurrentPrice,Total_Value:Total_Value,typeoforder:typeoforder,side:side};
         
      alert(typeoforder);
      this.PS.Put(pt).subscribe(
        response => response,
        error => console.error(error),
        () => this.getOrders()
    );
  }*/
  sort_stock_Name_ascending()
  {
   this.ListStocks.sort((a, b) => a.Name.localeCompare(b.Name));
  }
  sort_stock_Name_descending()
  {
    this.ListStocks.sort((a, b) => a.Name.localeCompare(b.Name));
    this.ListStocks.reverse();
  }
  Index(i)
  {
    this.PS.Index(i);
  }
  sort_CurPrice_ascending()
  {
   this.ListStocks.sort(function(obj1, obj2)
   {
     return obj1.CurrentPrice-obj2.CurrentPrice;
   })
  }

  sort_CurPrice_descending()
  {
    this.ListStocks.sort(function(obj1, obj2)
    {
      return obj2.CurrentPrice-obj1.CurrentPrice;
    })
  }
 

}
