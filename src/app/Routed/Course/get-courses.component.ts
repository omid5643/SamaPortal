//ran ng update to migrate

import { ModalService } from '../../services/modal-service';
import { CourseService } from './course-service';
import { Course } from '../../models/course';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-get-courses',
  templateUrl: './get-courses.component.html',
  styleUrls: ['./get-courses.component.less'],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class GetCoursesComponent implements OnInit {
  Title: string;
  Courses:Course[];
  CourseToUpdate:Course;


  constructor(private courseService: CourseService, private modalService: ModalService) {

    this.Title = "Course List Page";
    this.CourseToUpdate=new Course;

  }

  ngOnInit() {

    this.getCourses();
  }
  getCourses() {

    this.courseService.GetCourses().subscribe(data => this.Courses = data);

  }
  removeCourse(id:number) {

   this.courseService.RemoveCourse(id).subscribe(x=>
    
    {

      this.getCourses()

    });
  }

  updateCourse(){

    this.courseService.UpdateCourse(this.CourseToUpdate);
    this.getCourses();
  }

  
  showUpdateModal(id:number)
 {
  
     let foundCourse=this.Courses.find(x=>x.Id===id);

     this.CourseToUpdate=foundCourse;
      document.getElementById("openUpdateModalButton").click();
 }




}





