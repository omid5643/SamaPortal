import { Component, OnInit } from '@angular/core';
import { GetStudentsComponent } from './get-students.component';
import { Student } from '../../models/student';
import { Alert } from 'selenium-webdriver';
import { HttpClient } from '@angular/common/http';
import { ModalService } from '../../services/modal-service';
import { StudentService } from './student-service';
@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.less']
})
export class CreateStudentComponent implements OnInit {
  student: Student;


  constructor( private modalService: ModalService, private studentservice: StudentService) {

    this.student = new Student();

  }

  ngOnInit() {
  }
  createStudent() {

    this.studentservice.CreateStudent(this.student);


  }

}
