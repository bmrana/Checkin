import { MdSnackBar } from '@angular/material';
import { Status } from './../../status-code.model';
import { WebConnectService } from './../../web-connect.service';
import { ActivatedRoute, Params, Router, ParamMap } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonService } from './../person.service';
import { Person } from './../person.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-person',
  templateUrl: './selected-person.component.html',
  styleUrls: ['./selected-person.component.css']
})

export class SelectedPersonComponent implements OnInit {
  person: Person;
  id: number;
  editMode = false;
  personForm: FormGroup;
  buttonText = 'Create!';
  titleText= 'Please enter your details';
  subtitle = '';
  showSpinner = false;

  constructor(private personService: PersonService,
              private router: Router,
              private route: ActivatedRoute,
              private httpService: WebConnectService,
              public snackBar: MdSnackBar) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
        }
      );
    this.person = this.personService.getPerson(this.id);
    // this.selectedPerson = this.personService.personSelected;

    this.personService.statusCode
    .subscribe(
      (s: Status) => {
        this.openSnackBar(s);
        this.showSpinner = false;
      }
    );

    this.editMode = this.person != null;
    this.initForm();
  }

  openSnackBar(s: Status) {
    let message = '';
    s.Column1 === -98 ? (message = 'Email Address already registered! Enter new email or reset form.') :
      (message = 'PID already registered! Enter new PID or reset form.');
    this.snackBar.open(message, '', {duration: 5000});
  }

  onSubmit() {
    this.showSpinner = true;
    this.httpService.whoWantsUpdate = this.buildPerson();
    // this.httpService.updateStudent(this.buildPerson());
    this.router.navigate(['classes/' + this.id + '/post/']);
  }

  buildPerson() {
    const sid = this.editMode ? this.person.id : -1;
    const newGuy: Person = new Person(
      sid, this.personForm.get('pid').value, this.personForm.get('email').value,
      this.personForm.get('agency').value, this.personForm.get('fname').value, this.personForm.get('lname').value
    );
    return newGuy;
  }

  private initForm() {
    let fname = '';
    let lname = '';
    let email = '';
    let agency = '';
    let pid = '';

    if (this.editMode) {
      this.buttonText = 'Confirm!';
      this.titleText = 'Please confirm your details';
      this.subtitle = 'Make any needed changes.';
      fname = this.person.fname;
      lname = this.person.lname;
      email = this.person.email;
      agency = this.person.agency;
      pid = this.person.pid;
    }

    this.personForm = new FormGroup ({
      'fname': new FormControl(fname, Validators.required),
      'lname': new FormControl(lname, Validators.required),
      'email': new FormControl(email, [Validators.required, Validators.email]),
      'agency': new FormControl(agency, Validators.required),
      'pid': new FormControl(pid)
    });
  }
}
