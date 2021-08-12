import { Injectable } from '@angular/core';
import { Student } from '../../models/student';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class StudentService {


    constructor(private http: HttpClient) {


    }

    CreateStudent(student: Student) {
        let createStudentUrl = 'http://localhost:59019/api/Student/Add';
        this.http.post(createStudentUrl, student).subscribe()



    }

}





