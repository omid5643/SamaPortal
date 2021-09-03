import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { Alert } from 'selenium-webdriver';
import { ModalService } from '../../services/modal-service';
import { StudentService } from './student-service';
@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.less']
})
export class CreateStudentComponent implements OnInit {
  student: Student;
  //studentPhoneNumber:string;


  constructor( private modalService: ModalService, private studentservice: StudentService) {

    this.student = new Student();

  }

  ngOnInit() {
  }
  createStudent() {
   // var test=this.studentPhoneNumber;
  // this.student.PhoneNumbers=[];
    //this.student.PhoneNumbers[0]=this.studentPhoneNumber;

    this.studentservice.CreateStudent(this.student);


  }

}
