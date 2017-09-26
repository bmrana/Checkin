import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
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
  editMode = false;
  subscription: Subscription;
  personForm: FormGroup;

  constructor(private personService: PersonService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.selectedPerson = this.personService.personSelected;
    this.editMode = this.selectedPerson != null;
  }

  private initForm() {
    let fname = '';
    let lname = '';
    let email = '';
    let agency = '';
    let pid = '';

    this.personForm = new FormGroup ({
      'fname': new FormControl(fname, Validators.required),
      'lname': new FormControl(lname, Validators.required),
      'email': new FormControl(email, Validators.required),
      'agency': new FormControl(agency, Validators.required),
      'pid': new FormControl(pid, Validators.required)
    });
  }
}
