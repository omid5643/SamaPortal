import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CreateEmployeeComponent } from './create-employee.component';
import { GetEmployeesComponent } from './get-employees.component';




const routes: Routes = 
[{ path: '', component: GetEmployeesComponent },
{ path: 'CreateEmployee', component: CreateEmployeeComponent }
];

@NgModule({
  declarations: [
    CreateEmployeeComponent, 
    GetEmployeesComponent
  ],
  imports: [FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeeModule { }
