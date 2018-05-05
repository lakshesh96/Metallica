import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs/Subject';
declare var $:any;

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit, OnChanges {

  @Input() title:string = "";
	@Input() body:string = "";
  @Input() bodyDetails:string = "";
  @Input() parentSubject:Subject<any>;
  @Input() alertSource:string = "";
  @Input() alertHidden = true;

  @Output() okEmit = new EventEmitter<boolean>();
  
  constructor() {
   }

  ngOnInit() {
    /*this.parentSubject.subscribe(event => {
      this.throwAlert();
    });*/
  }

  ngOnChanges(){
    if(this.alertHidden == false)
      this.throwAlert();
  }

  throwAlert(){
		console.log("2 at Child");
		$("#LoginModal").modal();
  }
  
  closeAlertRoute(){
    console.log("At child close",this.alertSource);
    if(this.alertSource=="Success")
      this.okEmit.emit(true);
    else if(this.alertSource=="Error")
      this.okEmit.emit(false);
  }

}
