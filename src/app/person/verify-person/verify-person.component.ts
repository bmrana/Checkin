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
    this.route.data
      .subscribe((data: { persons: Person[]}) => {
        this.possiblePersons = data.persons;
        console.log(this.possiblePersons);
      });
  }

  onSearchAgain() {
    this.router.navigate(['/identity']);
  }

  onCreateProfile() {
    this.router.navigate(['person']);
  }
}
