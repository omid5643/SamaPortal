import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from './student-service';
//import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-get-students',
  templateUrl: './get-students.component.html',
  styleUrls: ['./get-students.component.less']
})
export class GetStudentsComponent implements OnInit {
  Title: string;
  Students: any;
  constructor(private studentService: StudentService) {


  }

  ngOnInit() {

    this.getStudent();

  }
  getStudent() {


    this.studentService.GetStudents().subscribe(x=>this.Students=x)
  }



}

