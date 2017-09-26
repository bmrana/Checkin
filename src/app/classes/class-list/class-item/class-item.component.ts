import { ClassesService } from './../../classes.service';
import { Router } from '@angular/router';
import { Class } from './../../class.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-class-item',
  templateUrl: './class-item.component.html',
  styleUrls: ['./class-item.component.css']
})
export class ClassItemComponent implements OnInit {
  @Input() class: Class;

  constructor(private router: Router,
              private classesService: ClassesService) { }

  ngOnInit() {
  }

  onSelect() {
    this.classesService.onClassSelected(this.class.id);
    this.router.navigate(['confirm']);
  }

}
