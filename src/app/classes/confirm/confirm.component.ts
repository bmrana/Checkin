import { Router } from '@angular/router';
import { ClassesService } from './../classes.service';
import { Class } from './../class.model';
import { Person } from './../../person/person.model';
import { PersonService } from './../../person/person.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  person: Person;
  class: Class;
  name: string;

  constructor(private personService: PersonService,
              private classesService: ClassesService,
              private router: Router) { }

  ngOnInit() {
    // if (!this.personService.personSelected || !this.classesService.classSelected) { // no person selected
    //   this.router.navigate(['identity']);
    // } else {
    //   this.person = this.personService.personSelected;
    //   this.class = this.classesService.classSelected;

    //   this.name = this.person.fname + ' ' + this.person.lname;
    // }
  }

}
