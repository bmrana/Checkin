import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Person } from './person.model';

export class PersonService {
    // personSelected: Person;
    personSelected = new Subject<Person>();

    private persons: Person[] = [
        new Person(1, '252090', 'brandon.rana@cityofdenton.com', 'Denton PD', 'Brandon', 'Rana'),
        new Person(2, '252090', 'brandon.rana@gmail.com', 'Denton PD', 'Justin', 'Rana'),
        new Person(3, '', 'todd.kidwell@cityofdenton.com', 'Denton PD', 'Todd', 'Kidwell')
    ];

    private possiblePersons: Person[] = [];

    findPossibles(pid: string, email: string, fname: string, lname: string) {
        this.possiblePersons = [];
        this.possiblePersons = this.persons.filter(
            (p) => {
                return p.identity === pid || p.email === email ||  (p.lname === lname && p.fname === fname);
            }
        );

        console.log(this.possiblePersons);
    }

    getPossibles() {
        return this.possiblePersons.slice();
    }

    onPersonSelected(id: number) {
        const index = this.persons.findIndex(i => i.personid === id);
        this.personSelected.next(this.persons[index]);
    }
}
