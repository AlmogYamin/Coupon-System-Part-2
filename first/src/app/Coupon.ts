export class Coupon{
    constructor(private _id:number,
                private _title:string,
                private _price:number)
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

    get title () : string
    {
    return this._title;
    }
    set title(newTitle : string)
    {
    this._title = newTitle;
    }

    get price () : number
    {
    return this._price;
    }
    set price(newPrice : number)
    {
    this._price = newPrice;
}
}