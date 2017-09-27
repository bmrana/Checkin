import { Person } from './person/person.model';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { OnInit, Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class WebConnectService {
  possiblePersons: Person[];

  constructor(private http: HttpClient) { }

  getStudents(pid: string, lname: string, fname: string, email: string) {
    let parameters = new HttpParams();

    parameters.append('PID', pid);
    parameters.append('lname', lname);
    parameters.append('fname', fname);
    parameters.append('email', email);

    this.http.get<Person[]>('http://services.dentontraining.com/searchpid/searchpid.svc?wsdl',
    {params: parameters})
      .subscribe(persons => {
        this.possiblePersons = persons;
        console.log(this.possiblePersons);
      });
  }
}
