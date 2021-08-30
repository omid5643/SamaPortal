import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { ModalService } from '../../services/modal-service';
import { CourseService } from './course-service';
import { Alert } from 'selenium-webdriver';
@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.componet.html',
  styleUrls: ['./create-course.componet.less']
})
export class CreateCourseComponent implements OnInit {
  course: Course

  constructor(private courseService: CourseService, private modalService: ModalService) {

    this.course = new Course();
  }

  ngOnInit() {


  }

  createCourse() {


    this.courseService.CreateCourse(this.course);
  }

}
