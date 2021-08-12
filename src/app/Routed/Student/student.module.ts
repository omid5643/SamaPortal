import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { CreateStudentComponent } from './create-student.component';
import { GetStudentsComponent } from './get-students.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [{path: '', component: GetStudentsComponent},
 { path: 'CreateStudent', component: CreateStudentComponent}
];

@NgModule({
  declarations: [CreateStudentComponent, GetStudentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule

  ]
})
export class StudentModule { }
