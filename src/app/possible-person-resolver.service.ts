import { PersonService } from './person/person.service';
import { WebConnectService } from './web-connect.service';
import { Injectable } from '@angular/core';
import { Resolve,
        Router,
        ActivatedRouteSnapshot,
        RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import { Person } from './person/person.model';

@Injectable()
export class PossiblePersonResolver implements Resolve<Person[]> {
  constructor(private router: Router,
              private personService: PersonService,
              private httpService: WebConnectService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Person[]> {
    return this.personService.personsRetrieved.take(1).map(possiblePersons => {
      if (possiblePersons.length > 0) {
        return possiblePersons;
      } else {
        this.router.navigate(['/verify']);
        return null;
      }
    });
  }

}
