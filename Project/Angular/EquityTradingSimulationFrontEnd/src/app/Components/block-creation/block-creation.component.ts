import { Component, OnInit } from '@angular/core';
import {BlockserviceService} from "../../Services/blockservice/blockservice.service";

@Component({
  selector: 'app-block-creation',
  templateUrl: './block-creation.component.html',
  styleUrls: ['./block-creation.component.css']
})
export class BlockCreationComponent implements OnInit {

  block:any[];

  constructor(private bs:BlockserviceService) { }

  ngOnInit() {
  }

  getdata()
  {
      this.bs.get_blockdata().subscribe
          (response => this.block = response,
          error => console.error(error)
      ); 
  }


}
