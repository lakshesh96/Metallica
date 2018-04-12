import { Component, OnInit } from '@angular/core';
import{ExceltojsonService} from "../../Services/exceltojson/exceltojson.service";
import { AddPmAdminService } from "../../Services/add-pm-admin/add-pm-admin.service";

@Component({
  selector: 'app-admin-portfoliomanager-add',
  templateUrl: './admin-portfoliomanager-add.component.html',
  styleUrls: ['./admin-portfoliomanager-add.component.css']
})
export class AdminPortfoliomanagerAddComponent implements OnInit {

  constructor(private addpmservice:AddPmAdminService) { }

  ngOnInit() {
  }
  public result: any;
  private xlsxToJsonService: ExceltojsonService = new ExceltojsonService();

  handleFile(event) {
    let file = event.target.files[0];
    this.xlsxToJsonService.processFileToJson({}, file).subscribe(data => {
      this.result = data['sheets'].Sheet1;
      this.AddPM();
    })

}

  AddPM(){
    this.addpmservice.AddPMs(this.result);
  }
}
