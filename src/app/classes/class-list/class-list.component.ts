import { Router } from '@angular/router';
import { Person } from './../../person/person.model';
import { PersonService } from './../../person/person.service';
import { Class } from './../class.model';
import { ClassesService } from './../classes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  currentClasses: Class[];
  currentPerson: Person;
  name: string;

  constructor(private classService: ClassesService,
              private personService: PersonService,
              private router: Router) { }

  ngOnInit() {
    if (!this.personService.personSelected) { // no person selected
      this.router.navigate(['identity']);
    } else {
      this.currentPerson = this.personService.personSelected;
      this.name = this.currentPerson.fname + ' ' + this.currentPerson.lname;
      this.currentClasses = this.classService.getClasses();
    }
  }

}
