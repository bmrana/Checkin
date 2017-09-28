import { WebConnectService } from './../web-connect.service';
import { Person } from './person.model';

export class PersonService {
    personSelected: Person;

    // private persons: Person[]
    //     = [
    //     new Person(1, '252090', 'brandon.rana@cityofdenton.com', 'Denton PD', 'Brandon', 'Rana'),
    //     new Person(2, '252090', 'brandon.rana@gmail.com', 'Denton PD', 'Justin', 'Rana'),
    //     new Person(3, '', 'todd.kidwell@cityofdenton.com', 'Denton PD', 'Todd', 'Kidwell')
    // ];

    private possiblePersons: Person[] = [];

    // findPossibles(pid: string, email: string, fname: string, lname: string) {
    //     // this.possiblePersons = [];
    //     // this.possiblePersons = this.persons.filter(
    //     //     (p) => {
    //     //         return p.identity === pid || p.email === email ||  (p.lname === lname && p.fname === fname);
    //     //     }
    //     // );

    //     // this.httpRequest.getStudents(pid, lname, fname, email)
    //     //     .subscribe(
    //     //         (persons: any[]) => this.possiblePersons = persons
    //     //     );
    // }

    setPossibles(possibles: Person[]) {
        this.possiblePersons = possibles;
    }

    getPossibles() {
        return this.possiblePersons.slice();
    }

    onPersonSelected(id: number) {
        const index = this.possiblePersons.findIndex(i => i.pid === id);
        this.personSelected = this.possiblePersons[index];
    }
}
