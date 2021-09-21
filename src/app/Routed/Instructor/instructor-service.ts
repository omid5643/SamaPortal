import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Instructor } from '../../models/instructor';
import { ModalService } from '../../services/modal-service';
import { Observable } from 'rxjs';
import { url } from 'inspector';
import { error } from 'console';
@Injectable({ providedIn: 'root' })

export class InstructorService {


    constructor(private http: HttpClient, private modalService: ModalService) {

    }

    CreateInstructor(instructor: Instructor) {
        let createInstructorUrl = 'http://localhost:59019/api/Instructor/Add';
        this.http.post(createInstructorUrl, instructor).subscribe()
        error => {
            this.modalService.ShowModal()
        }


    }
    GetInstructors(): Observable<Instructor[]> {
        let getInstructorUrl = 'http://localhost:59019/api/Instructor/Load';
        return this.http.get<Instructor[]>(getInstructorUrl);



    }
    RemoveInstructor(id:number):Observable<boolean>{
        let Url = 'http://localhost:59019/api/Instructor/Remove';
        let body = new HttpParams();
        body = body.set('id', id);
       return this.http.post(Url,body) as Observable<boolean> ;


    }

    UpdateInstructor(instructor:Instructor)
    {

        let Url = 'http://localhost:59019/api/Instructor/Update';
       return this.http.post(Url,instructor).subscribe() ;
       error => {
        this.modalService.ShowModal()
    }


     }

            
        


    }


