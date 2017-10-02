export class Class {
    public Title: string;
    public Location: string;
    public _location: string;
    public _title: string;
    public Id: string;
    public _id: string;

    constructor(Title: string, Location: string, _title: string, _location: string, Id: string, _id: string) {
        this._title = _title;
        this._location = _location;
        this.Title = Title;
        this.Location = Location;
        this.Id = Id;
        this._id = _id;
    }
}
