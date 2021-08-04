import { Grade } from "../enum.Omran.Sama/grade";
import { Semester } from "../enum.Omran.Sama/semester";

export class Enrollment {


    StudentId: number;
    CourseId: number;
    InstructorId: number;
    Semester: Semester;
    CreateDate: Date;
    CreateBy: string;
    Grade: Grade;
}


