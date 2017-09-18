import { PersonService } from './../person.service';
import { Person } from './../person.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-person',
  templateUrl: './verify-person.component.html',
  styleUrls: ['./verify-person.component.css']
})
export class VerifyPersonComponent implements OnInit {
  possiblePersons: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.possiblePersons = this.personService.getPossibles;
  }

}
