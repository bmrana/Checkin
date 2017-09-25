import { ActivatedRoute, Params } from '@angular/router';
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

  constructor(private personService: PersonService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.personService.personSelected
      .subscribe(
        (selectedPerson: Person) => {
          this.selectedPerson = selectedPerson;
        }
      );
      console.log(this.selectedPerson);
  }
}
