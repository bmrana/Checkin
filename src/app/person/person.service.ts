import { Person } from './person.model';

export class PersonService {
    private persons: Person[] = [
        new Person('252090','brandon.rana@cityofdenton.com','Denton PD','Brandon','Rana')
    ]

    getPerson() {
        return this.persons.slice();
    }
}