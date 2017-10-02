import { ActivatedRoute, Router } from '@angular/router';
import { Status } from './../status-code.model';
import { Injectable } from '@angular/core';
import { Credential } from './credential.model';
import { WebConnectService } from './../web-connect.service';
import { Person } from './person.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PersonService {
    whoWantsIn: Credential;
    personsRetrieved = new Subject<Person[]>();
    statusCode = new Subject<Status>();
    newPerson: Person;

    constructor(private router: Router, private route: ActivatedRoute) {}

    private possiblePersons: Person[]= [];

    setPossibles(persons: Person[]) {
        this.possiblePersons = persons;
        this.personsRetrieved.next(this.possiblePersons);
    }

    getPerson(idNumber): Person {
        const person: Person = this.possiblePersons.find(p => p.id === idNumber);
        return person;
    }

    updateStatusCode(status: Status[]) {
        status[0].Column1 > 0 ? this.newPersonIDReceived(status[0].Column1) : this.personExists(status[0]);
    }

    personExists(status: Status) {
        this.statusCode.next(status);
        this.router.navigate(['/person/new']);
    }

    newPersonIDReceived(id) {
        // update new person with new ID from database.
        this.newPerson.id = id;
        // push new person into local array
        this.possiblePersons.push(this.newPerson);

        this.router.navigate(['/classes/' + id], {relativeTo: this.route});
    }
}
