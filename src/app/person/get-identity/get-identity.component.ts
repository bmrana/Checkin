import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { PersonService } from './../person.service';
import { Person } from './../person.model';


@Component({
  selector: 'app-get-identity',
  templateUrl: './get-identity.component.html',
  styleUrls: ['./get-identity.component.css']
})

export class GetIdentityComponent {
  @ViewChild('f') identityForm: NgForm;
  possiblePersons: Person[];
  email = '';
  lname = '';
  fname = '';
  pid = '';
  identity = '';

  constructor(private router: Router,
              private personService: PersonService,
              private route: ActivatedRoute) { }

  onSubmit(form: NgForm) {
    this.personService.findPossibles(this.identityForm.value.pid, this.identityForm.value.email,
      this.identityForm.value.fullName.fname, this.identityForm.value.fullName.lname);
    this.router.navigate(['verify']);
  }

}
