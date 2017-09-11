import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-get-identity',
  templateUrl: './get-identity.component.html',
  styleUrls: ['./get-identity.component.css']
})
export class GetIdentityComponent implements OnInit {
  identityType: string = "pid"; //Used to set initial view
  identity: string = '';
  @Output() identitySubmitted = new EventEmitter<{type: string, personID: string}>();

  constructor() { }

  ngOnInit() {
  }

  onUpdatePersonID(event:Event){
    this.identity = (<HTMLInputElement>event.target).value;
  }
  onSubmit() {
    this.identitySubmitted.emit({type:this.identityType, personID:this.identity});
  }

}
