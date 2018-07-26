export class Person{
    
    //private _id : number;
    //private _name : string;
    constructor(private _id:number, private _name:string)
    {

    }
get id () : number
{
    return this._id;
}
set id(newId : number)
{
    this._id = newId;
}
get name () : string
{
    return this._name;
}
set name(newName : string)
{
    this._name = newName;
}

}