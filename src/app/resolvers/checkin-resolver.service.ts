import { Checkin } from './../checkin.model';
import { Observable } from 'rxjs/Observable';
import { WebConnectService } from './../web-connect.service';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class CheckinResolverService implements Resolve<any> {

  constructor(private router: Router, private httpService: WebConnectService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.httpService.insertCheckin(this.httpService.checkin);
  }

}
