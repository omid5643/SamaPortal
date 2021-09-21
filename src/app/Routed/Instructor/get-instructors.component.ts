//ran ng update to migrate
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Instructor } from '../../models/instructor';
import {ModalService} from '../../services/modal-service';
import { InstructorService } from './instructor-service';


@Component({
  selector: 'app-get-instructors',
  templateUrl: './get-instructors.component.html',
  styleUrls: ['./get-instructors.component.less'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class GetInstructorsComponent implements OnInit {
  Title:string;
  Instructors:Instructor[];
  InstructorToUpdate:Instructor;

  //@ViewChild('myModal') myModal;
 

  constructor(private modalService:ModalService,private instructorService:InstructorService)
  { 

    this.Title="Instructor List Page";
    this.InstructorToUpdate=new Instructor()
    
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
  updateInstructor(){

  this.instructorService.UpdateInstructor(this.InstructorToUpdate);
  this.getInstructors();

  }
  
  showUpdateModal(id:number)
  {
  
     let foundInstructor=this.Instructors.find(x=>x.Id===id);

     this.InstructorToUpdate=foundInstructor;

      document.getElementById("openUpdateModalButton").click();
  }

 
  
}





