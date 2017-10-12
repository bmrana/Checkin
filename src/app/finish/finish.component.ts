import { ClassesService } from './../classes/classes.service';
import { Class } from './../classes/class.model';
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
  selectedClass: Class;
  constructor(private router: Router, private classService: ClassesService) { }

  ngOnInit() {
    this.intervalId = window.setInterval(() => {
      this.seconds += 1;
      if (this.seconds === 101) {
        this.router.navigate(['/']);
      }
    }, 100);
    this.selectedClass = this.classService.classSelected;
  }

}
