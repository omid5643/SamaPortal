import { Entity } from "./etity";


export class Account extends Entity {


    ForeignId: number;
    Number: string;
    Balance: number;
    BalaceDueDate: Date;
    CreateDate: Date;
    CreateBy: string;



}