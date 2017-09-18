import { Person } from './../../person.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-possible-person',
  templateUrl: './possible-person.component.html',
  styleUrls: ['./possible-person.component.css']
})
export class PossiblePersonComponent implements OnInit {
  @Input() possiblePerson: Person;

  constructor() { }

  ngOnInit() {
  }

}
