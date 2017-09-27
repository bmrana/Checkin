import { WebConnectService } from './web-connect.service';
import { ClassesService } from './classes/classes.service';
import { Component, Input, OnInit } from '@angular/core';

import { PersonService } from './person/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonService, ClassesService]
})

export class AppComponent implements OnInit {

  constructor(private http: WebConnectService) {}

  ngOnInit() {
    this.http.getStudents('252090', null, null, null);
  }
}
