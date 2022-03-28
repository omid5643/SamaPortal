import { Injectable } from '@angular/core';
import { Student } from '../../models/student';
import { HttpClient, HttpParams } from '@angular/common/http';
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

    GetStudents(): Observable<Student[]> {
        let getStudentUrl = 'http://localhost:59019/api/Student/Load';
        return this.http.get<Student[]>(getStudentUrl);


    }
    RemoveStudent(id: number): Observable<boolean> {
        let Url = 'http://localhost:59019/api/Student/Remove';
        let body = new HttpParams();
        body = body.set('id', id);
        return this.http.post(Url, body) as Observable<boolean>;


    }
    UpdateStudent(student: Student) {

        let Url = 'http://localhost:59019/api/Student/Update';

        return this.http.post(Url, student).subscribe()

        error => {
            this.modalService.ShowModal()
        }


    }
    RemoveManyStudents(Student:Student[]) {

        let Url = 'http://localhost:59019/api/Student/RemoveMany';
        
        return this.http.post(Url,Student) as Observable<boolean>;



    }

}





