import { Grade } from "../enum.Omran.Sama/grade";
import { Semester } from "../enum.Omran.Sama/semester";
import { Entity } from "./etity";

export class Enrollment extends Entity {


    StudentId: number;
    CourseId: number;
    InstructorId: number;
    Semester: Semester;
    CreateDate: Date;
    CreateBy: string;
    Grade: Grade;
}


