import { Address } from "./address";
import { Entity } from "./etity";
export class Student extends Entity {
    FirstName: string;
    LastName: string;
    Age: number;
    Addresses; Address;
    PhoneNumbers: string[];
    UserId: number
    CreateDate: DataCue;
    CreateBy: String;



}