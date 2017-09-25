import { Router, ActivatedRoute } from '@angular/router';
import { PersonService } from './../person.service';
import { Person } from './../person.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-person',
  templateUrl: './verify-person.component.html',
  styleUrls: ['./verify-person.component.css']
})
export class VerifyPersonComponent implements OnInit {
  possiblePersons: Person[] = [];

  constructor(private personService: PersonService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.possiblePersons = this.personService.getPossibles();
  }

  onSearchAgain() {
    this.router.navigate(['/identity']);
  }

  onCreateProfile() {
    this.router.navigate(['person']);
  }
}
