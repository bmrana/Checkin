import { Credential } from './person/credential.model';
import { PersonService } from './person/person.service';
import { Person } from './person/person.model';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { OnInit, Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class WebConnectService {
  persons: Person[];

  constructor(private http: HttpClient, private personService: PersonService) { }

  getStudents(whoWantsIn: Credential) {
    let parameters = new HttpParams();

    parameters = parameters.append('PID', whoWantsIn.pid);
    parameters = parameters.append('lname', whoWantsIn.lname);
    parameters = parameters.append('fname', whoWantsIn.fname);
    parameters = parameters.append('email', whoWantsIn.email);

    return this.http.get<Person[]>('http://services.dentontraining.com/searchpid/searchpid.svc/getPossibleStudents?wsdl',
    {params: parameters})
      .map(persons => {
        this.persons = persons;
        console.log(this.persons);
        return this.persons;
      })
      .subscribe(
        (possiblePersons: Person[]) => {
          this.personService.setPossibles(possiblePersons);
        }
      );
  }
}
