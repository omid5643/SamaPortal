import { Address } from "./address";
import { Entity } from "./etity";

export class Instructor extends Entity {


    FirstName: string;
    LastName: string;
    Address: Address;
    PhoneNumber:string[];
    Email:string;
    UserId: number;
    CreateDate: Date;
    CreateBy: string;
    constructor() {
        super();

        this.Address = new Address();
        this.PhoneNumber=[];


    }


}