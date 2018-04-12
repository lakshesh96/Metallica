import { Component, OnInit } from '@angular/core';
import{CurrentPosition} from "../../Models/current-position"
import{CurrentPositionService} from "../../Services/current-position/current-position.service"

@Component({
  selector: 'app-current-position',
  templateUrl: './current-position.component.html',
  styleUrls: ['./current-position.component.css']
})
export class CurrentPositionComponent implements OnInit {
  list : CurrentPosition[];
  constructor(private DS: CurrentPositionService) { }

  getPosition(){
    this.list = this.DS.CurrentS;
  }

  ngOnInit() {
    //this.list=this.DS.CurrentS
  }

}
