import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateInstructorComponent } from './create-instructor.component';
import { GetInstructorsComponent } from './get-instructors.component';
import { FormsModule } from '@angular/forms';

const routes: Routes =
  [
    { path: '', component: GetInstructorsComponent },
    { path: 'CreateInstructor', component: CreateInstructorComponent }
  ];

@NgModule({
  declarations: [CreateInstructorComponent, GetInstructorsComponent],
  imports: [FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InstructorModule { }
