export class Credential {
    public pid: string = null;
    public email: string = null;
    public lname: string = null;
    public fname: string = null;

    constructor(pid: string, email: string, lname: string, fname: string) {
        this.pid = pid;
        this.email = email;
        this.lname = lname;
        this.fname = fname;
    }
}
