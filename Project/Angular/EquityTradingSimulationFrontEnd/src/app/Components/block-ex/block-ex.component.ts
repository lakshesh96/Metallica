import { Component, OnInit } from '@angular/core';
import { BlockserviceService } from '../../Services/blockservice/blockservice.service';

@Component({
  selector: 'app-block-ex',
  templateUrl: './block-ex.component.html',
  styleUrls: ['./block-ex.component.css']
})
export class BlockExComponent implements OnInit {
pendingBlocks=[];
  constructor(public blockService:BlockserviceService) {
    this.getPendingBlocks();
   }

  ngOnInit() {
  }
  executepending(BlockId)
  {
    this.blockService.executeblock(BlockId);
    this.getPendingBlocks();
  }
  getPendingBlocks(){
    this.blockService.get_pendingAndPartialblock().subscribe(
      response => this.pendingBlocks= response,
      error => console.error(error),
      () => console.log(this.pendingBlocks)
    );
  }
}
