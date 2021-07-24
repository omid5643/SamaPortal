
import {Injectable} from '@angular/core';
import { Employee} from '../interfaces/employee';
import { ɵangular_packages_platform_browser_platform_browser_k } from '@angular/platform-browser';
//import { queueComponentIndexForCheck } from '@angular/core/src/render3/instructions';


@Injectable({ providedIn : 'root'}) // <== this means we dont have to include this in the providers array
export class EmployeeService {

    public constructor() {

    }
GetEmployees(): Employee[] {
// tslint:disable-next-line: prefer-const
  let temp = [];

  for ( let i = 0; i < 10; i++) {
// tslint:disable-next-line: no-var-keyword
// tslint:disable-next-line: prefer-const
// tslint:disable-next-line: no-angle-bracket-type-assertion
// tslint:disable-next-line: prefer-const
// tslint:disable-next-line: no-angle-bracket-type-assertion
  const emp  = <Employee> {
   FirtName: 'omid',
   LastName: 'Abaei',
   JobTitle: 'Developer'

  } ;
  switch (i) {
  case 1: emp.FirtName = 'javad'; emp.LastName = 'javadi'; break;
  case 2: emp.FirtName = 'hasan'; emp.LastName = 'hasani'; break;
  case 3: emp.FirtName = 'mers'; emp.LastName = 'kook'; break;
  case 4: emp.FirtName = 'anita'; emp.LastName = 'pachan'; break;
  case 5: emp.FirtName = 'javad'; emp.LastName = 'javadi'; break;
  case 6: emp.FirtName = 'antony'; emp.LastName = 'bordain'; break;
  case 7: emp.FirtName = 'xiadng'; emp.LastName = 'zo'; break;
  }
// tslint:disable-next-line: align
   temp.push(emp);
}
// tslint:disable-next-line: prefer-const
  let result = ( temp.map(x => x)) as Employee[];
  return result;
}

GetDistinctEmployeesbyFirstName( employees: Employee[]): Employee[] {

const result = [];

for (let i = 0 ; i < employees.length ; i++) {

    let isDistinct = true;
    for (let j = 0 ; j < i ; j++) {
       if ( employees[j].FirtName === employees[i].FirtName) {
        isDistinct = false;
        break;
       }
    }
    if (isDistinct) {
 result.push(employees[i]);
    }
}

return result as Employee[] ;
}
GetDistinctEmployeebyFirstFilter( employees: Employee[]): Employee[] {
// tslint:disable-next-line: prefer-const
 let result = [];
 employees.map(x => x.FirtName)
   .filter((item, index, arr) => arr.indexOf(item) === index )
   .forEach(firstName => {
    result.push( employees.filter(emp => emp.FirtName === firstName)[0]);

   });

 return result as Employee[];

    }
}
