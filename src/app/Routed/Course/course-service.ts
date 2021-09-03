import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { ModalService } from '../../services/modal-service';
import { Course } from "../../models/course";
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CourseService {

    constructor(private http: HttpClient, private modalService: ModalService) {



    }
    CreateCourse(course:Course) {
        let postCourseUrl = 'http://localhost:59019/api/Course/Add';
        this.http.post(postCourseUrl,course).subscribe()

        error => {
            this.modalService.ShowModal()
        }
    }


    GetCourses():Observable<Course[]> {
        let getCourseUrl = 'http://localhost:59019/api/Course/Load';
      return  this.http.get<Course[]>(getCourseUrl);


    }
    RemoveCourse(id:number):Observable<boolean>{
        let Url = 'http://localhost:59019/api/Course/Remove';
       
        let body = new HttpParams();
        body = body.set('id', id);

      return this.http.post(Url,body) as Observable<boolean>;

    }













}