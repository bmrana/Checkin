import { Class } from './class.model';
import { Injectable } from '@angular/core';

export class ClassesService {
  classSelected: Class;

  classes: Class[]= [];

  getClasses() {
    return this.classes.slice();
  }

  getClass(id): Class {
    const thisclass: Class = this.classes.find(c => c.Id === id);
    return thisclass;
  }

  updateClasses(classes: Class[]) {
    this.classes = classes;
  }

  onClassSelected(id: string) {
    this.classSelected = this.classes.find(c => c.Id === id);
  }
}
