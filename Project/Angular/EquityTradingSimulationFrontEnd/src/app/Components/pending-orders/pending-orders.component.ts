import { Component, OnInit } from '@angular/core';
import {PendingStocks} from '../../Models/pending-stocks';
import {PendingListService} from '../../Services/Pending/pending-list.service';
import { BlockserviceService } from '../../Services/blockservice/blockservice.service';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent implements OnInit 
{
  ListStocks:any[];
  divhide:boolean;
  pendingblock:any[]=[];
  partialblock:any[]=[];
  pending:boolean;
  partial:boolean;

  constructor(
    private PS:PendingListService,
  private bs:BlockserviceService
) {
    this.getOrders();
    this.pending=true;
    this.partial=true;
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
     element.OrderType = "Market";
    if(element.OrderType==1)
      element.OrderType="Limit";
    if(element.OrderType==2)
      element.OrderType="Stop";
    if(element.OrderSide==0)
      element.OrderType="Buy";
    if(element.OrderSide==1)
      element.OrderSide="Sell";
    if(element.OrderStatus==3)
      element.OrderStatus="Pending";

  }
  blocknew(orderid)
  {
    sessionStorage.setItem("OrderId",orderid);
    this.bs.createnewblock(orderid);
    this.pendingblock=this.bs.pendingblock;

  }
  blockexisting(orderid)
  {
    sessionStorage.setItem("OrderId",orderid);
    this.partialblock=this.bs.partialblock;

  }

  executepartial(partialid)
  {
  this.bs.executeblock(partialid);
  }
  executepending(pendingid)
  {
    this.bs.executeblock(pendingid);
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
  /*Put(Id:number,UserId:number,StocksId:number,OrderSide:number,OrderType:number,Quantity:number,LimitPrice:number,
    StopPrice:number,DateAdded:string,OrderStatus:string, )
  {
      let pt:any={Id:Id,UserId:UserId,StocksId:StocksId,OrderSide:OrderSide,OrderType:OrderType,Quantity:Quantity,LimitPrice:LimitPrice,
        StopPrice:StopPrice,DateAdded:DateAdded,typeoforder:typeoforder,OrderStatus:OrderStatus};
         
      alert(typeoforder);
      this.PS.Put(pt).subscribe(
        response => response,
        error => console.error(error),
        () => this.getOrders()
    );
  }*/
  Index(i)
  {
    this.PS.Index(i);
  }
  sort_CurPrice_ascending()
  {
   this.ListStocks.sort(function(obj1, obj2)
   {
     return obj1.Quantity-obj2.Quantity;
   })
  }

  sort_CurPrice_descending()
  {
    this.ListStocks.sort(function(obj1, obj2)
    {
      return obj2.Quantity-obj1.Quantity;
    })
  }
 

}
