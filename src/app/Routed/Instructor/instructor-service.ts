import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Instructor } from '../../models/instructor';
import { ModalService } from '../../services/modal-service';
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

}
