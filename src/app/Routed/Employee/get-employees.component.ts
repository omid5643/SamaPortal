import { dashCaseToCamelCase } from "@angular/compiler/src/util";
import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Employee } from "../../models/employee";
import { ModalService } from "../../services/modal-service";
import { EmployeeService } from "./employee-service";
import { employeeType } from "../../Enums/EmployeeType";

  
  @Component({
    selector: 'app-get-employees',
    templateUrl:'./get-employees.component.html',
    styleUrls: ['./get-employees.component.less']
  
  })

  export class GetEmployeesComponent implements OnInit{
     Employees:Employee[];
     employeeTypes:employeeType[]=[employeeType.Admin,employeeType.Instructor,employeeType.Facility];
     EmployeeToUpdate:Employee;

      constructor( private employeeService:EmployeeService ,private modalService:ModalService){

     this.EmployeeToUpdate=new Employee();

      }



      ngOnInit() {
        this.getEmployees();
          
      }

      getEmployees(){

        this.employeeService.GetEmployees().subscribe(data=>this.Employees=data);
      }

      removeEmployee(id:number){

        this.employeeService.RemoveEmployee(id).subscribe(x=>{this.getEmployees()});
      }

      updateEmployee(){

     this.employeeService.UpdateEmployee(this.EmployeeToUpdate);
        this.getEmployees();
      }

      showUpdateModal(id:number)
      {
      
         let foundInstructor=this.Employees.find(x=>x.Id===id);
    
         this.EmployeeToUpdate=foundInstructor;
    
          document.getElementById("openUpdateModalButton").click();
      }
    


  }