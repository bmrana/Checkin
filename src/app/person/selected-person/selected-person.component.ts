import { PersonService } from './../person.service';
import { Person } from './../person.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-person',
  templateUrl: './selected-person.component.html',
  styleUrls: ['./selected-person.component.css']
})

export class SelectedPersonComponent implements OnInit {
  selectedPerson: Person;

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.selectedPerson = this.personService.personSelected;
  }
}
