import { Class } from './class.model';
import { Injectable } from '@angular/core';

export class ClassesService {
  classSelected: Class;

  private classes: Class[] = [
    new Class(1, 'Intermediate Crime Scene', 'C-121'),
    new Class(2, 'Bevel Gardner: Blood Spatter 1', 'D-120'),
    new Class(3, 'The Colony PD: Active Shooter', 'A-131')
  ];

  getClasses() {
    return this.classes.slice();
  }

  onClassSelected(id: number) {
    const index = this.classes.findIndex(i => i.id === id);
    this.classSelected = this.classes[index];
    // console.log(this.personSelected);
}
}
