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
  pendingblock:any[]=[];
  partialblock:any[]=[];
  pending:boolean;
  partial:boolean;
  ListStocks:any[];
  divhide:boolean=true;
  hidelimit:boolean=true;
  hidestop:boolean=true;
  a:string="Market";
  usertype:boolean=true;

  constructor(private PS:PendingListService,
    private bs:BlockserviceService) {
    this.getOrders();
    this.pending=true;
    this.partial=true;
    if(sessionStorage.getItem('Type')=="Trader"){
      this.usertype=false;
    }else{
      this.usertype=false;
    }
   }

   blocknew(orderid)
  {
    sessionStorage.setItem("OrderId",orderid);
    this.bs.createnewblock(orderid);
    this.bs.get_pendingblock().subscribe(
      response => this.pendingblock = response,
      error => console.error(error),
      () => console.log(this.pendingblock)
    )
    
  }
  blockexisting(orderid)
  {
    sessionStorage.setItem("OrderId",orderid);
    this.bs.get_partialblock().subscribe(
      response => this.partialblock = response,
      error => console.error(error),
      () => console.log(this.partialblock)
    )
    
  }

  executepartial(partialid)
  {
  this.bs.executeblock(partialid);
  }


  executepending(pendingid)
  {
    this.bs.executeblock(pendingid);
  }

  ngOnInit()
  {
    
    
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

  ToggleTextboxes(type){
    if(type=="Market"){
      this.hidelimit=true;
      this.hidestop=true;
    }else if(type=="Limit"){
      this.hidelimit=false;
      this.hidestop=true;
    }else if(type=="Stop"){
      this.hidelimit=true;
      this.hidestop=false;
    }else if(type=="StopLimit"){
      this.hidelimit=false;
      this.hidestop=false;
    }
  }

  fetchNameChanges(element)
  {
    if(element.OrderType==0)
     element.OrderType = "Market";
    if(element.OrderType==1)
      element.OrderType="Limit";
    if(element.OrderType==2)
      element.OrderType="Stop";
      if(element.OrderType==3)
      element.OrderType="StopLimit";
    if(element.OrderSide==0)
      element.OrderSide="Buy";
    if(element.OrderSide==1)
      element.OrderSide="Sell";
    if(element.OrderStatus==2)
      element.OrderStatus="Pending";

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


  ModifyOrder(Id:number,UserId:number,StocksId:number,OrderSide:string,OrderType:string,Quantity:number,LimitPrice:number,
    StopPrice:number,DateAdded:string,OrderStatus:string)
  {
      let pt:any={Id:Id,UserId:UserId,StocksId:StocksId,OrderSide:OrderSide,OrderType:OrderType,Quantity:Quantity,LimitPrice:LimitPrice,
        StopPrice:StopPrice,DateAdded:DateAdded,OrderStatus:OrderStatus};
         
      this.PS.PutOrder(pt).subscribe(
        response => response,
        error => console.error(error),
        () => this.getOrders()
    );
  }

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
