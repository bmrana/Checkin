import { Router } from '@angular/router';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {
  intervalId = 0;
  seconds = 0;
  constructor(private router: Router) { }

  ngOnInit() {
    this.intervalId = window.setInterval(() => {
      this.seconds += 2;
      if (this.seconds === 100) {
        this.router.navigate(['/']);
      }
    }, 100);
  }

}
