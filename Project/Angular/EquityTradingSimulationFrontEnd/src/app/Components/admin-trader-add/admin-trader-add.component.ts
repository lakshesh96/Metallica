import { Component, OnInit } from '@angular/core';
import{ExceltojsonService} from "../../Services/exceltojson/exceltojson.service";
import { AddTraderAdminService } from "../../Services/add-trader-admin/add-trader-admin.service";

@Component({
  selector: 'app-admin-trader-add',
  templateUrl: './admin-trader-add.component.html',
  styleUrls: ['./admin-trader-add.component.css']
})
export class AdminTraderAddComponent implements OnInit {


  constructor(private addtraderservice:AddTraderAdminService) {
 
   }

  ngOnInit() {
  }

  public result: any;
  private xlsxToJsonService: ExceltojsonService = new ExceltojsonService();

  handleFile(event) {
    let file = event.target.files[0];
    this.xlsxToJsonService.processFileToJson({}, file).subscribe(data => {
      this.result = data['sheets'].Sheet1;
      this.AddTrader();
    })

}

  AddTrader(){
    this.addtraderservice.AddTraders(this.result);    
  }
}
