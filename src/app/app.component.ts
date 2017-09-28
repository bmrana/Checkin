import { ClassesService } from './classes/classes.service';
import { Component } from '@angular/core';

import { PersonService } from './person/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonService, ClassesService]
})

export class AppComponent {

}
