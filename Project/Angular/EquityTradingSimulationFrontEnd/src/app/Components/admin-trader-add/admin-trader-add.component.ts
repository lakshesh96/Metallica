import { Component, OnInit } from '@angular/core';
import{ExceltojsonService} from "../../Services/exceltojson/exceltojson.service"

@Component({
  selector: 'app-admin-trader-add',
  templateUrl: './admin-trader-add.component.html',
  styleUrls: ['./admin-trader-add.component.css']
})
export class AdminTraderAddComponent implements OnInit {


  constructor() {
 
   }

  ngOnInit() {
  }

  public result: any;
  private xlsxToJsonService: ExceltojsonService = new ExceltojsonService();

  handleFile(event) {
    let file = event.target.files[0];
    this.xlsxToJsonService.processFileToJson({}, file).subscribe(data => {
      this.result = data['sheets'].Sheet1;
    })

}
}
