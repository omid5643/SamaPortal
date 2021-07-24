

import {NgModule,Injector} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';//<==lazy laded module still need to import them eventhough imported in app module
import {LogModule} from '../../modules/logModule/log.module';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import {ListEmployeesComponent} from './list-employees.component';
import {CreateEmployeeComponent} from './create-employee.component';
import { BannerComponent } from '../../components/banner/banner.component';
import {StepComponent} from '../../components/step/step.component';
import {WizardStep} from '../../directives/wizardstep';
import {ToLower} from '../../pipes/toLower.pipe';
import {CreateEmployeeFormCanDeactivateService} from '../Employee/createEmployeeCanDeactivate.service';
const routes: Routes = [{path: '', component: ListEmployeesComponent},
 { path: 'CreateEmployee', component: CreateEmployeeComponent, canDeactivate:[CreateEmployeeFormCanDeactivateService]}
];

// export function GetLogger( ):Logger
// {
//    let _logger=new Logger(self..get('logtypetoken'));
//    return _logger;
// }

@NgModule(
    {
imports: [RouterModule.forChild(routes) , FormsModule,LogModule.WithLogTypes('alert'), ReactiveFormsModule, CommonModule],
 declarations: [ CreateEmployeeComponent,ListEmployeesComponent,BannerComponent,StepComponent,WizardStep,ToLower],

 providers:[CreateEmployeeFormCanDeactivateService]
})
export class EmployeeModule {
    constructor(injector: Injector) {
     
    }
    


}
