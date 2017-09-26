import { Component, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

import { PersonService } from './../person.service';
import { Person } from './../person.model';


@Component({
  selector: 'app-get-identity',
  templateUrl: './get-identity.component.html',
  styleUrls: ['./get-identity.component.css']
})

export class GetIdentityComponent implements OnInit{
  possiblePersons: Person[];
  identityForm: FormGroup;

  constructor(private router: Router,
              private personService: PersonService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    // const email = '';
    // const lname = '';
    // const fname = '';
    // const identity = '';

    this.identityForm = new FormGroup ({
      'fullname': new FormGroup({
        'lname': new FormControl(null),
        'fname': new FormControl(null)
        }),
      'email': new FormControl(null, Validators.email),
      'pid': new FormControl(null)
    });
  }

  onSubmit() {
    this.personService
      .findPossibles(this.identityForm.value.pid, this.identityForm.value.email,
                    this.identityForm.value.fname, this.identityForm.value.lname);
    this.router.navigate(['verify']);
    console.log(this.identityForm);
  }

}
