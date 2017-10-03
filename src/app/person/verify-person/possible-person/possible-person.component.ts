import { Router, ActivatedRoute, Params } from '@angular/router';
import { PersonService } from './../../person.service';
import { Person } from './../../person.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-possible-person',
  templateUrl: './possible-person.component.html',
  styleUrls: ['./possible-person.component.css']
})
export class PossiblePersonComponent implements OnInit {
  @Input() possiblePerson: Person;

  constructor(private personService: PersonService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() { }

  onSelect() {
    // const selectedId = this.personService.onPersonSelected(this.possiblePerson.id);
    this.router.navigate(['/person/' + this.possiblePerson.id]);
  }
}
