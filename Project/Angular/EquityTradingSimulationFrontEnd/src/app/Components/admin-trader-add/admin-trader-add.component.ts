import { Component, OnInit } from '@angular/core';
import{ExceltojsonService} from "../../Services/exceltojson/exceltojson.service";
import { AddTraderAdminService } from "../../Services/add-trader-admin/add-trader-admin.service";
import { User } from "../../Models/user";

@Component({
  selector: 'app-admin-trader-add',
  templateUrl: './admin-trader-add.component.html',
  styleUrls: ['./admin-trader-add.component.css']
})
export class AdminTraderAddComponent implements OnInit {

  listapproved:User[];
  listunapproved:User[];

  constructor(private addtraderservice:AddTraderAdminService) {
 
   }

   Demo(){
    this.addtraderservice.getApprovedTraders().subscribe
    (response => this.listapproved = response,
    error => console.error(error),
    () => { console.info(this.listapproved)}
    );

    this.addtraderservice.getUnapprovedTraders().subscribe
    (response => this.listunapproved = response,
    error => console.error(error),
    () => { console.info(this.listunapproved)}
    );
   }

  ngOnInit() {
   this.Demo();
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
    this.addtraderservice.AddTraders(this.result).subscribe(
      response => response,
      error => console.error(error),
      () => this.Demo()
  );
  }

  Toggle(e:User){
    //alert("Approve Trader?");
    if(e.Approved==false){
      alert("Approve Trader Manager?");
      }else if(e.Approved==true){
        alert("Disapprove Trader Manager?");
      }

    this.addtraderservice.ToggleTrader(e).subscribe(
      response => response,
      error => console.error(error),
      () => this.Demo()
      //() => this.getTraders()
  );
  }
}
