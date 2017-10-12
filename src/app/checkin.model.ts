export class Checkin {
    public classID: string;
    public personID: number;
    public classTitle: string;

    constructor(classID: string, personID: number, classTitle: string) {
        this.classID = classID;
        this.personID = personID;
        this.classTitle = classTitle;
    }
}
