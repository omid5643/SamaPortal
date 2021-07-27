import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { CreateCourseComponent } from './create-course.component';
import {GetCourseComponent } from './get-courses.component';

const routes: Routes = 
[
  {path: '', component:  GetCourseComponent},
  {path: 'Createcourse', component: CreateCourseComponent}
];

@NgModule({
  declarations: [CreateCourseComponent,GetCourseComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CourseModule { }
