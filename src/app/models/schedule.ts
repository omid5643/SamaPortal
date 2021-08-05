import { WeekDays } from "../enum.Omran.Sama/weekDays";
import { Entity } from "./etity";

export class Schedule extends Entity {

    StartTime: string;
    EndTime: string;
    WeekDays: WeekDays[];
    CreatDate: Date;
    CreatedBy: string;


}