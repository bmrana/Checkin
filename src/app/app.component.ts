import { WebConnectService } from './web-connect.service';
import { PossiblePersonResolver } from './possible-person-resolver.service';
import { ClassesService } from './classes/classes.service';
import { Component } from '@angular/core';

import { PersonService } from './person/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonService, ClassesService, PossiblePersonResolver, WebConnectService]
})

export class AppComponent {

}
