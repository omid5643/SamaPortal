import { Component, OnInit } from '@angular/core';
import { StudentService } from './student-service';
import { ModalService } from '../../services/modal-service';
import { Student } from '../../models/student';
import { NgModule } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-get-students',
  templateUrl: './get-students.component.html',
  styleUrls: ['./get-students.component.less']
})
export class GetStudentsComponent implements OnInit {
  Title: string;
  Students: Student[];
  StudentToUpdate:Student;
  StudentsIds:Student[];


  constructor(private studentService: StudentService, private modalService: ModalService ) {

    this.Title = "Instructor List Page";
    this.StudentToUpdate= new Student();
    this.StudentsIds=[];
    
   

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
  updateStudent(){

  this.studentService.UpdateStudent(this.StudentToUpdate);
  this.getStudents();

  }


 showUpdateModal(id:number)
  {
  
     let foundStudent=this.Students.find(x=>x.Id===id);

     this.StudentToUpdate=foundStudent;

      document.getElementById("openUpdateModalButton").click();
  }
  removeManyStudents(id:number){

   if(this.StudentsIds.filter(x=>x.Id===id)){
     this.removeStudent(id);}
   

  

   }
   removeMany(){



    this.studentService.RemoveManyStudents(this.StudentsIds).subscribe(x => { this.getStudents(); });
   }
   
   
    
  }







