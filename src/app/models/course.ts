import { Entity } from "./etity";

export class Course extends Entity {
    Name: string;
    Credit: number;
    PreReqId:number|null;
    Cost: number;
    CreatDate: Date;
    CreatedBy: string;



}