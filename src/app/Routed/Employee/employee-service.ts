import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

GetEmployees():Observable<Employee[]>{

let getEmployeesUrl='http://localhost:59019/api/Employee/Load';
 return this.http.get<Employee[]>(getEmployeesUrl);

}

RemoveEmployee(id:number):Observable<boolean>{
let Url='http://localhost:59019/api/Employee/Remove';
let body = new HttpParams();
body = body.set('id', id);
return this.http.post(Url,body) as Observable<boolean> ;

}

UpdateEmployee(employee:Employee){
    let Url='http://localhost:59019/api/Employee/Update';
return this.http.post(Url,employee).subscribe(error=>
    
    {this.modalService.ShowModal()}
    );

}





}




