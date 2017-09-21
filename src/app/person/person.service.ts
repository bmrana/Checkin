import { EventEmitter } from '@angular/core';
import { Person } from './person.model';

export class PersonService {
    personSelected: Person;

    private persons: Person[] = [
        new Person(1, '252090', 'brandon.rana@cityofdenton.com', 'Denton PD', 'Brandon', 'Rana'),
        new Person(2, '252090', 'brandon.rana@gmail.com', 'Denton PD', 'Justin', 'Rana'),
        new Person(3, '252090', 'todd.kidwell@cityofdenton.com', 'Denton PD', 'Todd', 'Kidwell')
    ];

    private possiblePersons: Person[] = [];

    findPossibles(pid: string, email: string, fname: string, lname: string) {
        this.possiblePersons = [];
        const personByPID = this.persons.filter(
            (p) => {
                return p.identity === pid;
            }
        );
        if (this.possiblePersons.indexOf(personByPID.personid) === -1) {
        this.possiblePersons.push(...personByPID);
        const personByEmail = this.persons.filter(
            (p) => {
                return p.email === email;
            }
        );
        this.possiblePersons.push(...personByEmail);
        const personByName = this.persons.filter(
            (p) => {
                return p.lname === lname && p.fname === fname;
            }
        );
        this.possiblePersons.push(...personByName);
    }

    getPossibles() {
        return this.possiblePersons.slice();
    }
}
