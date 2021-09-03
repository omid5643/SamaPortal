//ran ng update to migrate
import { Component, OnInit } from '@angular/core';
import { Instructor } from '../../models/instructor';
import {ModalService} from '../../services/modal-service';
import { InstructorService } from './instructor-service';


@Component({
  selector: 'app-get-instructors',
  templateUrl: './get-instructors.component.html',
  styleUrls: ['./get-instructors.component.less']
})
export class GetInstructorsComponent implements OnInit {
  Title:string;
  Instructors:any;
 

  constructor(private modalService:ModalService,private instructorService:InstructorService)
  { 

    this.Title="Instructor List Page";
  }

  ngOnInit() {
  
    this.getInstructors();
  }
  getInstructors(){
    this.instructorService.GetInstructors().subscribe(data=>this.Instructors=data)

  }
  removeInstructor(id:number){

    this.instructorService.RemoveInstructor(id).subscribe(x=>{

      this.getInstructors();
    });
  }
  

  
}





