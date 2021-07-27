//ran ng update to migrate
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ModalService} from '../../services/modal-service';

@Component({
  selector: 'app-get-courses',
  templateUrl: './get-courses.component.html',
  styleUrls: ['./get-courses.component.less']
})
export class GetCourseComponent implements OnInit {
  Title:string;
  Courses :any;
 

  constructor(private http: HttpClient, private modalService:ModalService)
   { 

    this.Title="Course List Page";
   }

  ngOnInit() {
    let getCourseUrl = 'http://localhost:59019/api/Course/Load';
    //TODO:add type and service
   // this.http.get<Instructor[]>(getInstructorUrl).subscribe(data=>{})
     this.http.get(getCourseUrl).subscribe(
       data=>
      {
        this. Courses=data
      },
      error=>
      { 
        this.modalService.ShowModal()
      }
      
      )
    
  }

  
}





