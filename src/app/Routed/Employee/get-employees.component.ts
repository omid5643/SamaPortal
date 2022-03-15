import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Employee } from "../../models/employee";
  
  @Component({
    selector: 'app-get-employees',
    templateUrl:'./get-employees.component.html',
    styleUrls: ['./get-employess.component.less']
  
  })

  export class GetEmployeesComponent implements OnInit{
      employee:Employee;

      constructor(){

      this.employee=new Employee();

      }



      ngOnInit() {
        
          
      }
  }