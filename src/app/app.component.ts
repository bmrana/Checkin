import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Component } from '@angular/core';
import { MdSnackBar } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent {
  idleState = new Subject<string>();
  // idleState = 'Start idle';
  subscription: Subscription;
  message: string;
  timedOut = false;

  constructor(private idle: Idle,
      public snackBar: MdSnackBar,
      private router: Router) {
    idle.setIdle(60);
    idle.setTimeout(15);
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => this.idleState.next('No longer idle.'));
    // idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');
    idle.onTimeout.subscribe(() => {
      this.reset();
  });

    idle.onIdleStart.subscribe(() => {
      this.idleState.next('Are you still there?  Please touch the screen...');
      // this.idleState = 'Are you still there?  Please touch the screen...';
    });

    idle.onTimeoutWarning.subscribe((countdown) => {
      this.idleState.next('You will time out in ' + countdown + ' seconds!');
      // this.idleState = 'You will time out in ' + countdown + ' seconds!';
    });

    this.reset();
  }


  reset() {
    this.router.navigate(['/']);
    this.idle.watch();
    this.idleState.next('Started.');
    this.timedOut = false;
  }

}
