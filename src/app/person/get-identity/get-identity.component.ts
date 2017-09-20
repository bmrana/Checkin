import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PersonService } from './../person.service';
import { Person } from './../person.model';


@Component({
  selector: 'app-get-identity',
  templateUrl: './get-identity.component.html',
  styleUrls: ['./get-identity.component.css']
})

export class GetIdentityComponent {
  possiblePersons: Person[];
  email = '';
  lname = '';
  fname = '';
  pid = '';
  identity = '';

  constructor(private router: Router, private personService: PersonService) { }

  onKey(event: Event, input: string) {
    switch (input) {
      case 'pid':
        this.pid = ((<HTMLInputElement>event.target).value);
        break;
      case 'email':
        this.email = ((<HTMLInputElement>event.target).value);
        break;
      case 'lname':
        this.lname = ((<HTMLInputElement>event.target).value);
        break;
      case 'fname':
        this.fname = ((<HTMLInputElement>event.target).value);
        break;
    }
  }

  onSubmit() {
    this.personService.findPossibles(this.identity);
    this.router.navigate(['../verify']);
  }

}
