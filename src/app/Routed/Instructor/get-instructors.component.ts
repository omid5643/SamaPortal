//ran ng update to migrate
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-instructors',
  templateUrl: './get-instructors.component.html',
  styleUrls: ['./get-instructors.component.less']
})
export class GetInstructorsComponent implements OnInit {
  Title:string;
  Instructors:any;
  MyCar:Car;

  constructor(private http: HttpClient)
   { 

    this.Title="Instructor List Page";
    this.MyCar= new Car();
    this.MyCar.Model="BMW";
   }

  ngOnInit() {
    let getInstructorUrl = 'http://localhost:59019/api/Instructor/Load';
    //TODO:add type and service
   // this.http.get<Instructor[]>(getInstructorUrl).subscribe(data=>{})
     this.http.get(getInstructorUrl).subscribe(data=>
      {

        this.Instructors=data
      })
  }

}

export class Car{
  Model:string;
  Make:string;
  NumberOfDoors:number;
  

}


