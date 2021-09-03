import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateCourseComponent } from './create-course.component';
import { GetCoursesComponent } from './get-courses.component';
import { FormsModule } from '@angular/forms';
const routes: Routes =
  [
    { path: '', component: GetCoursesComponent },
    { path: 'Createcourse', component: CreateCourseComponent }
  ];

@NgModule({
  declarations: [CreateCourseComponent, GetCoursesComponent],
  imports: [FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CourseModule { }
