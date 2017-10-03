import { Credential } from '../person/credential.model';
import { WebConnectService } from '../web-connect.service';
import { Injectable } from '@angular/core';
import { Resolve,
        Router,
        ActivatedRouteSnapshot,
        RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import { Person } from '../person/person.model';

@Injectable()
export class SelectedPersonResolver implements Resolve<any> {

  constructor(private router: Router,
              private httpService: WebConnectService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.httpService.updateStudent(this.httpService.whoWantsUpdate);


  }

}
