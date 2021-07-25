//ran ng update to migrate
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ModalService} from '../../services/modal-service';

@Component({
  selector: 'app-get-instructors',
  templateUrl: './get-instructors.component.html',
  styleUrls: ['./get-instructors.component.less']
})
export class GetInstructorsComponent implements OnInit {
  Title:string;
  Instructors:any;
 

  constructor(private http: HttpClient, private modalService:ModalService)
   { 

    this.Title="Instructor List Page";
   }

  ngOnInit() {
    let getInstructorUrl = 'http://localhost:59019/api/Instructor/Load';
    //TODO:add type and service
   // this.http.get<Instructor[]>(getInstructorUrl).subscribe(data=>{})
     this.http.get(getInstructorUrl).subscribe(
       data=>
      {
        this.Instructors=data
      },
      error=>
      { 
        this.modalService.ShowModal()
      }
      
      )
    
  }

  
}





