import { Component, OnInit,Inject } from '@angular/core';
import {Logger} from '../../services/logger';
import {FormControl, FormGroup, FormBuilder, Validators,NgForm} from '@angular/forms';
import {ForbiddenNameValidator} from '../../validatorFunctions/validatorFunctions';
//import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
//import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.less'],
  //providers:[{ provide: Logger, useClass:Logger}]
})
export class CreateEmployeeComponent implements OnInit {
 public employeeForm: FormGroup;
 
  constructor(private formBuilder: FormBuilder,   private logger: Logger) { }

  ngOnInit() {
    // this.employeeForm = new FormGroup(
    //   {fullName: new FormControl(),
    //   email: new FormControl(),
    //   skills: new FormGroup({
    //     skillName: new FormControl(),
    //     experinceInYears: new FormControl(),
    //     proficiency: new FormControl()
    //    })
    // }
    //      );

    this.employeeForm = this.formBuilder.group
 ({fullName: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(10), ForbiddenNameValidator(/kooni/i)]],
  email: ['myemail@myemail.com', [Validators.required, Validators.min(2)]],
   skills: this.formBuilder.group({skillName: [''], experinceInYears: [''], proficiency: ['']})});

        }


  LogForm(): void {
 //   console.log(this.employeeForm.value.email); // accessing the value of email as a property of employeeForm
    console.log(this.employeeForm.controls.fullName); // <== accessing individual control
 //   console.log(this.employeeForm.get('fullName').touched); // <== accessing individual control using get method
    console.log((  this.employeeForm.controls.skills as FormGroup ).controls.skillName.value); // <== accessing individual control
  }

onLoadDataClick(): void {
   this.employeeForm.setValue({
     fullName: 'omid',
      email: 'omid@yahoo.com',
      skills: {
        skillName : 'good',
        experinceInYears : '5',
        proficiency : 'intermediate'
      }

    });
  this.logger.log('hello!');

  //  this.employeeForm.patchValue( {  // <== to set values partilly, or we can evem use patch value to update all the form controls
  //     fullName: 'omid',
  //     email: 'omid@yahoo.com'
  //     });


    // this.employeeForm.controls.skills as FormGroup ).controls.skillName.setValue('good');
}

}
