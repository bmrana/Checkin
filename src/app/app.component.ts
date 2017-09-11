import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  view: string = 'getPersonID';

  onPersonIDSubmitted(personIDData: {personID: string, idType: string}){
    this.view = 'showPersonData'
  }
}
