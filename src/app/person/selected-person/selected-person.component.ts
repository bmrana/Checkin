import { ActivatedRoute, Params, Router } from '@angular/router';
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
  selectedPerson: Person;
  editMode = false;
  personForm: FormGroup;
  buttonText = 'Create!';
  titleText= 'Please enter your details';
  subtitle = '';

  constructor(private personService: PersonService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.selectedPerson = this.personService.personSelected;
    this.editMode = this.selectedPerson != null;
    this.initForm();
  }

  onSubmit() {
    this.router.navigate(['classes']);
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
      fname = this.selectedPerson.fname;
      lname = this.selectedPerson.lname;
      email = this.selectedPerson.email;
      agency = this.selectedPerson.agency;
      pid = this.selectedPerson.identity;
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
