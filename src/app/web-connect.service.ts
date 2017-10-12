import { Checkin } from './checkin.model';
import { ClassesService } from './classes/classes.service';
import { Class } from './classes/class.model';
import { Status } from './status-code.model';
import { Credential } from './person/credential.model';
import { PersonService } from './person/person.service';
import { Person } from './person/person.model';
import { HttpClient, HttpParams, HttpRequest, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class WebConnectService {
  whoWantsIn: Credential;
  checkin: Checkin;
  whoWantsUpdate: Person;
  headz = new HttpHeaders({ 'Content-Type': 'application/json' });
  testingUrlBase = 'http://localhost:57321';
  productionUrlBase = 'http://services.dentontraining.com';


  constructor(private http: HttpClient, private personService: PersonService,
              private classesService: ClassesService) { }

  fetchStudents(whoWantsIn: Credential) {
    let parameters = new HttpParams();
      parameters = parameters.append('PID', whoWantsIn.pid);
      parameters = parameters.append('lname', whoWantsIn.lname);
      parameters = parameters.append('fname', whoWantsIn.fname);
      parameters = parameters.append('email', whoWantsIn.email);

    return this.http.get<Person[]>(this.productionUrlBase + '/searchpid/searchpid.svc/getPossibleStudents?wsdl',
      {params: parameters})
      .map(
        (persons) => {
          this.personService.setPossibles(persons);
          return persons;
        }
      );
  }

  insertCheckin(checkin: Checkin) {
    return this.http.post(this.productionUrlBase + '/searchpid/searchPID.svc/insertCheckin', checkin, {headers: this.headz});
      }

  fetchClasses() {
    return this.http.get<Class[]>(this.productionUrlBase + '/GCalendar/GCalendar.svc/getEventList?wsdl')
      .map(
        (list) => {
          this.classesService.updateClasses(list);
          return list;
        }
      );
  }

  updateStudent(student: Person) {
    // Not good here, but works.  Update newPerson with details from form.
    this.personService.newPerson = student;
    return this.http.post(this.productionUrlBase + '/searchpid/searchpid.svc/updateStudent', student, {headers: this.headz})
    .map(
      (n: Status[]) => {
        this.personService.updateStatusCode(n); }
      , (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
        } else {
        }
      }
    );
  }
}
