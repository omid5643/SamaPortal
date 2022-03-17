import { Component, OnInit } from "@angular/core";
import { Employee } from "../../models/employee";
import { EmployeeService } from "./employee-service";
import { ModalService } from '../../services/modal-service';


@Component({
    selector: 'app-create-employee',
    templateUrl: './create-employee.component.html',
    styleUrls: ['./create-employee.component.less']
  })

  export class CreateEmployeeComponent implements OnInit{

    employee:Employee;

constructor(private employeeService:EmployeeService,private moduleService:ModalService){


    this.employee=new Employee();

 }



    ngOnInit() {
        
    }

   createEmployee(){
   this.employeeService.CreateEmployee(this.employee)


    }



  }

  