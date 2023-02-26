import { Entity } from "./etity";

import { Address } from "./address";
import { employeeType } from "../Enums/EmployeeType";
export class Employee
    extends Entity {

    FirstName: string;

    LastName: string;

    Age: number;

    UserId: number;
    Email: string;

    Address: Address;
    PhoneNumbers: string[];
    EmployeeType:employeeType;
    CreateDate: Date;
    CreateBy: string;

    constructor() {
        super()

        this.Address = new Address();
        this.PhoneNumbers = [];

    }

}