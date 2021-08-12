import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable, throwError } from 'rxjs';
@Component({
  selector: 'app-get-students',
  templateUrl: './get-students.component.html',
  styleUrls: ['./get-students.component.less']
})
export class GetStudentsComponent implements OnInit {
  Title: string;
  Students: any;
  constructor(private http: HttpClient) {

    this.Title = "Student List Page";
  }

  ngOnInit() {
    let getStudentUrl = 'http://localhost:59019/api/Student/Load';
    //TODO:add type and service
    // this.http.get<Student[]>(getStudentUrl).subscribe(data=>{})
    this.http.get(getStudentUrl).subscribe(data =>


      this.Students = data)


  }

}
