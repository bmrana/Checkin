import { ClassesService } from './../classes/classes.service';
import { PersonService } from './../person/person.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
              private personService: PersonService,
              private classesService: ClassesService) { }

  ngOnInit() {
  }

  onReset() {
    // this.personService.personSelected = null;
    this.classesService.classSelected = null;
    this.router.navigate(['identity']);
  }
}
