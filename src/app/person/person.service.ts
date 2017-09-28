import { Credential } from './credential.model';
import { WebConnectService } from './../web-connect.service';
import { Person } from './person.model';

export class PersonService {
    personSelected: Person;
    whoWantsIn: Credential;

    private possiblePersons: Person[] = [];

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
