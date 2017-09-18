import { Component, OnInit, Input } from '@angular/core';

import { Person } from './../person.model';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {

  @Input() person: Person;
  constructor() { }

  ngOnInit() {
  }

}
