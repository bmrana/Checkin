import { Credential } from './../credential.model';
import { WebConnectService } from './../../web-connect.service';
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

export class GetIdentityComponent implements OnInit {
  possiblePersons: Person[];
  identityForm: FormGroup;
  showSpinner = false;

  constructor(private router: Router,
              private httpService: WebConnectService,
              private route: ActivatedRoute,
              private personService: PersonService) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {

    this.identityForm = new FormGroup ({
      'fullname': new FormGroup({
        'lname': new FormControl(null),
        'fname': new FormControl(null)
        }),
      'email': new FormControl(null),
      'pid': new FormControl(null)
    });
  }

  onSubmit() {
    this.httpService.whoWantsIn = new Credential(this.identityForm.value.pid,
      this.identityForm.value.email,
      this.identityForm.value.fullname.lname,
      this.identityForm.value.fullname.fname,
      );
    this.showSpinner = true;
    // this.httpService.fetchStudents(this.personService.whoWantsIn);
    this.router.navigate(['verify']);
  }

}
