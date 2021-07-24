import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { CreateEmployeeComponent} from './Routed/Employee/create-employee.component';
//import { ListEmployeesComponent} from './Routed/Employee/list-employees.component';

const routes: Routes =
[
{path: 'employeelist', data:{ModuleName:'Employee Module'}, loadChildren: () => import('./Routed/Employee/employee.module').then(m => m.EmployeeModule)},
{path: 'studentlist', data:{ModuleName:'Student Module'}, loadChildren: () => import('./Routed/Student/student.module').then(m => m.StudentModule)},
{path: 'instructorlist', data:{ModuleName:'Instructor Module'}, loadChildren: () => import('./Routed/Instructor/instructor.module').then(m => m.InstructorModule)},
{path:'bmi',data:{ModuleName:'BMI Module'}, loadChildren: () => import('./Routed/BMI/BMI.module').then(m => m.BMIModule)},

{path: '', redirectTo: '/list' , pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
