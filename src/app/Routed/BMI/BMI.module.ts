
import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { CalculateBMIComponent} from './calculate-bmi.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CalculatorComponent } from './calculator.component';
import {SharedModule} from '../../modules/shared.module';
const routes: Routes = [{ path: '', component: CalculateBMIComponent},{path:'calculator', component:CalculatorComponent}]


@NgModule(
    { declarations: [CalculateBMIComponent, CalculatorComponent],
    imports: [RouterModule.forChild(routes), ReactiveFormsModule, FormsModule,CommonModule,SharedModule]

})
export class BMIModule {
}
