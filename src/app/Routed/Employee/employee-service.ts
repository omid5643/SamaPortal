import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from "../../models/employee";
import { ModalService } from "../../services/modal-service";



@Injectable({ providedIn: 'root' })

export class EmployeeService{
constructor( private http:HttpClient ,private modalService:ModalService){



}
CreateEmployee(employee:Employee){

let createEmployeeUrl='http://localhost:59019/api/Employee/Add';
this.http.post(createEmployeeUrl,employee).subscribe(
    error => {
        this.modalService.ShowModal()
    })


}


}




