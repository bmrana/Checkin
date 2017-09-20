export class Person {
    public identity: string;
    public email: string;
    public agency: string;
    public fname: string;
    public lname: string;

    constructor(identity: string, email: string, agency: string, fname: string, lname: string) {
        this.identity = identity;
        this.email = email;
        this.agency = agency;
        this.fname = fname;
        this.lname = lname;
    }
}
