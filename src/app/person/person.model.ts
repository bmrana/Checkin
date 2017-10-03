export class Person {
    public id: number;
    public pid: string;
    public email: string;
    public agency: string;
    public fname: string;
    public lname: string;

    constructor(id: number, pid: string, email: string, agency: string, fname: string, lname: string) {
        this.id = id;
        this.pid = pid;
        this.email = email;
        this.agency = agency;
        this.fname = fname;
        this.lname = lname;
    }
}
