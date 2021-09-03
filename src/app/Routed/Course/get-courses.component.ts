//ran ng update to migrate
import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal-service';
import { CourseService } from './course-service';

@Component({
  selector: 'app-get-courses',
  templateUrl: './get-courses.component.html',
  styleUrls: ['./get-courses.component.less']
})
export class GetCoursesComponent implements OnInit {
  Title: string;
  Courses: any;


  constructor(private courseService: CourseService, private modalService: ModalService) {

    this.Title = "Course List Page";
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



}





