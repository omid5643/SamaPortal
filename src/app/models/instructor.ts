import { Address } from "./address";
import { Entity } from "./etity";

export class Instructor extends Entity {


    FirstName: string;
    LastName: string;
    Addresses: Address;
    PhoneNumber: string[];
    UserId: number;
    CreateDate: Date;
    CreateBy: string;


}