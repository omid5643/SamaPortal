import { Entity } from "./etity";

import { Address } from "./address";
import { employeeType } from "../interfaces/employee";
export class Employee
    extends Entity {

    FirstName: string;

    LastName: string;

    Age: number;

    UserId: number;
    Email: string;

    Address: Address;
    PhoneNumbers: string[];
    EmployeeType:string;
    CreateDate: Date;
    CreateBy: string;

    constructor() {
        super()

        this.Address = new Address();
        this.PhoneNumbers = [];

    }

}