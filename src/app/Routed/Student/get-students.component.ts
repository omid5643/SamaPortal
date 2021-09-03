import { Component, OnInit } from '@angular/core';
import { StudentService } from './student-service';
import { ModalService } from '../../services/modal-service';
import { Student } from '../../models/student';
import { NgModule } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-get-students',
  templateUrl: './get-students.component.html',
  styleUrls: ['./get-students.component.less']
})
export class GetStudentsComponent implements OnInit {
  Title: string;
  Students: any;
  constructor(private studentService: StudentService, private modalService: ModalService) {
    this.Title = "Instructor List Page";

  }

  ngOnInit() {

    this.getStudents();

  }
  getStudents() {


    this.studentService.GetStudents().subscribe(data => {

      this.Students = data
    },
      error => {
        this.modalService.ShowModal()
      }

    )
  }
  removeStudent(id:number) {
    this.studentService.RemoveStudent(id).subscribe(x => { this.getStudents(); });


  }





}

