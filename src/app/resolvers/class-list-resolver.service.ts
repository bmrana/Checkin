import { Class } from './../classes/class.model';
import { WebConnectService } from '../web-connect.service';
import { Injectable } from '@angular/core';
import { Resolve,
        Router,
        ActivatedRouteSnapshot,
        RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

@Injectable()
export class ClassListResolver implements Resolve<any> {

constructor(private router: Router,
    private httpService: WebConnectService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Class[]> {
        return this.httpService.fetchClasses();
    }
}
