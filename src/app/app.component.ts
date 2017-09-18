import { Component, Input } from '@angular/core';

import { PersonService } from './person/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonService]
})

export class AppComponent {
  view: string = 'getPersonID';

  onPersonIDSubmitted(personIDData: {personID: string, idType: string}){
    this.view = 'showPersonData'
  }
}
