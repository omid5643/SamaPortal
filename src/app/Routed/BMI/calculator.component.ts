import { Component, OnInit, ChangeDetectorRef, NgZone, OnChanges,
   SimpleChanges, ViewChild, ViewContainerRef, ComponentFactory, ComponentFactoryResolver } from '@angular/core';
import { StepComponent } from '../../components/step/step.component';
import { NgForm } from '@angular/forms';
interface Department {
  id: number;
  name: string;
}
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.less']

})



export class CalculatorComponent implements OnInit, OnChanges {
  firstNumber = 10;
  secondNumber = 20;
 public departments: Department[];
 public selectedDepartment: Department;
 public confirmpassword: string;
 public password: string;
 public email: string;

 @ViewChild('bannerContainer', {read: ViewContainerRef,static:true})
 private _bannerContainer: ViewContainerRef;
  constructor(private _resolver: ComponentFactoryResolver) {


}
  ngOnChanges(changes: SimpleChanges): void {
      // changes[0].previousValue;

  }

  ngOnInit() {

  this._bannerContainer.createComponent(this._resolver.resolveComponentFactory(StepComponent));

  this.departments = [
      {id: 1
        , name: 'Physics'
      },
      {id: 2
        , name: 'Chem'
      },
      {id: 3
        , name: 'Math'
      },
    ];
  this.selectedDepartment = this.departments.find(d => d.id === 2);

  }

  calculate( form: NgForm) {
console.log(form.value);

  }

}
