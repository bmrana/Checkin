import { Status } from './status-code.model';
import { Credential } from './person/credential.model';
import { PersonService } from './person/person.service';
import { Person } from './person/person.model';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class WebConnectService {
  whoWantsIn: Credential;
  whoWantsUpdate: Person;

  constructor(private http: HttpClient, private personService: PersonService) { }

  fetchStudents(whoWantsIn: Credential) {
    let parameters = new HttpParams();
      parameters = parameters.append('PID', whoWantsIn.pid);
      parameters = parameters.append('lname', whoWantsIn.lname);
      parameters = parameters.append('fname', whoWantsIn.fname);
      parameters = parameters.append('email', whoWantsIn.email);

    return this.http.get<Person[]>('http://services.dentontraining.com/searchpid/searchpid.svc/getPossibleStudents?wsdl',
      {params: parameters})
      .map(
        (persons) => {
          console.log(persons);
          this.personService.setPossibles(persons);
          return persons;
        }
      );
  }

  updateStudent(student: Person) {
    console.log(student);
    this.http.post('http://services.dentontraining.com/searchpid/searchpid.svc/updateStudent?wsdl', student)
    .subscribe(
      (n) => {
        console.log(n);
        this.personService.updateStatusCode(n);
      }
    );
  }
}
