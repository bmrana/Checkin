import { ClassesService } from './../../classes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Class } from './../../class.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-class-item',
  templateUrl: './class-item.component.html',
  styleUrls: ['./class-item.component.css']
})
export class ClassItemComponent implements OnInit {
  @Input() class: Class;
  id: number;
  constructor(private router: Router,
              private classesService: ClassesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    );
  }

  onSelect() {
    this.classesService.onClassSelected(this.class.Id);
    this.router.navigate(['confirm/' + this.id + '/' + this.class.Id]);
  }

}
