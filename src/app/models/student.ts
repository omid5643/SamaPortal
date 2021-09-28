import { OnInit } from "@angular/core";
import { mainModule } from "process";
import { Address } from "./address";
import { Entity } from "./etity";

export class Student extends Entity {

    FirstName: string;
    LastName: string;
    Age: number;
    Address: Address;
    PhoneNumbers: string[];
    UserId: number;
    CreateDate: Date;
    CreateBy: string;
    Email: string;
    constructor() {
        super();

        this.Address = new Address();
        this.PhoneNumbers = [];


    }


}