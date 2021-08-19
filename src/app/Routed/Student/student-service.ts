import { Injectable } from '@angular/core';
import { Student } from '../../models/student';
import { HttpClient } from '@angular/common/http';
import { ModalService } from '../../services/modal-service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class StudentService {


    constructor(private http: HttpClient, private modalService: ModalService) {


    }

    CreateStudent(student: Student) {
        let createStudentUrl = 'http://localhost:59019/api/Student/Add';
        this.http.post(createStudentUrl, student).subscribe()

        error => {
            this.modalService.ShowModal()
        }

    }

    GetStudents():Observable<Student[]>{
        let getStudentUrl = 'http://localhost:59019/api/Student/Load';
        //TODO:add type and service
        // this.http.get<Student[]>(getStudentUrl).subscribe(data=>{})
       return this.http.get<Student[]>(getStudentUrl);
    

    }

}





