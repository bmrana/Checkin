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
              private personService: PersonService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Person[] {
    console.log('resolver Reached');
    return this.personService.getPossibles().map(possiblePersons => {
      if (possiblePersons) {
        return possiblePersons;
      } else {
        this.router.navigate(['/verify']);
        return null;
      }
    });
  }

}
