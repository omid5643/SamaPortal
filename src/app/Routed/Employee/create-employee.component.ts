import { Component, OnInit } from "@angular/core";
import { Employee } from "../../models/employee";


@Component({
    selector: 'app-create-employee',
    templateUrl: './create-employee.component.html',
    styleUrls: ['./create-employee.component.less']
  })

  export class CreateEmployeeComponent implements OnInit{

    employee:Employee;

constructor(){


    this.employee=new Employee();

 }



    ngOnInit() {
        
    }



  }

  