import { Router, ActivatedRoute, Params } from '@angular/router';
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
  id: number;
  classID: string;

  constructor(private personService: PersonService,
              private classesService: ClassesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.classID = params['classid'];
        this.person = this.personService.getPerson(this.id);
        this.class = this.classesService.getClass(this.classID);
      }
    );
      this.name = this.person.fname + ' ' + this.person.lname;
    }

    onConfirm() {
      this.router.navigate(['/complete']);
    }

    onCancel() {
      this.router.navigate(['/']);
    }
  }
