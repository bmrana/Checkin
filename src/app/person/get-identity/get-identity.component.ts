import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { PersonService } from './../person.service';
import { Person } from './../person.model';

@Component({
  selector: 'app-get-identity',
  templateUrl: './get-identity.component.html',
  styleUrls: ['./get-identity.component.css']
})

export class GetIdentityComponent implements OnInit {
  possiblePersons: Person[];
  identity = '';

  constructor(private router: Router, private personService: PersonService) { }

  ngOnInit() {
  }

  onUpdatePersonID(event: Event) {
    this.identity = (<HTMLInputElement>event.target).value;
  }

  onSubmit() {
    this.personService.findPossibles(this.identity);
    this.router.navigate(['../verify']);
  }

}
