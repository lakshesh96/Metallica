import { Component, OnInit } from '@angular/core';
import{ExceltojsonService} from "../../Services/exceltojson/exceltojson.service";
import { AddPmAdminService } from "../../Services/add-pm-admin/add-pm-admin.service";

@Component({
  selector: 'app-admin-portfoliomanager-add',
  templateUrl: './admin-portfoliomanager-add.component.html',
  styleUrls: ['./admin-portfoliomanager-add.component.css']
})
export class AdminPortfoliomanagerAddComponent implements OnInit {

  listapproved:any[];
  listunapproved:any[];

  constructor(private addpmservice:AddPmAdminService) { }

  ngOnInit() {
    this.addpmservice.getPMApproved().subscribe
    (response => this.listapproved = response,
    error => console.error(error),
    () => { console.info(this.listapproved)}
    );

    this.addpmservice.getPMUnapproved().subscribe
    (response => this.listunapproved = response,
    error => console.error(error),
    () => { console.info(this.listunapproved)}
    );
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
