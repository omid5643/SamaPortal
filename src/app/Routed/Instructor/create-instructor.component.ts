import { Component, OnInit } from '@angular/core';
import { Instructor } from '../../models/instructor';
import { InstructorService } from './instructor-service';
import { ModalService } from '../../services/modal-service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-create-instructor',
  templateUrl: './create-instructor.component.html',
  styleUrls: ['./create-instructor.component.less']
})
export class CreateInstructorComponent implements OnInit {
  instructor:Instructor;

  constructor(private instructorService:InstructorService, private moduleService:ModalService) 
   { 

    this.instructor=new Instructor();
    
   }

  ngOnInit() {
  }
  createInstrutor() {
   
    this.instructorService.CreateInstructor(this.instructor);
    


  }


}

