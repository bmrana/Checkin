import { WebConnectService } from './../../web-connect.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
  person: Person;
  id: number;
  name: string;

  constructor(private classService: ClassesService,
              private personService: PersonService,
              private router: Router,
              private httpService: WebConnectService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.person = this.personService.getPerson(this.id);
      }
    );
    if (!this.person) { // no person selected
      this.router.navigate(['identity']);
    } else {
      this.name = this.person.fname + ' ' + this.person.lname;
      this.currentClasses = this.classService.getClasses();
      
    }
  }

}
