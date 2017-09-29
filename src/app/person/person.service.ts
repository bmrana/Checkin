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
    private possiblePersons: Person[]= [];

    setPossibles(persons: Person[]) {
        this.possiblePersons = persons;
        this.personsRetrieved.next(this.possiblePersons);
    }

    getPerson(idNumber): Person {
        const person: Person = this.possiblePersons.find(p => p.id === idNumber);
        return person;
    }
    updateStatusCode(status: any) {
        this.statusCode.next(status);
    }
}
