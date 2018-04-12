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
  PendingShow:PendingStocks[]

  constructor(private PS:PendingListService) { }

  ngOnInit()
  {
    this.PendingShow=this.PS.ListPending;
  }

}
