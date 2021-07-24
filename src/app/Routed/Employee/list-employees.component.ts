import { Component, OnInit , ChangeDetectionStrategy, AfterViewInit,
   ChangeDetectorRef, ComponentFactoryResolver, inject, Inject, ViewChild,
    ViewChildren, QueryList, ContentChildren, ElementRef} from '@angular/core';
   
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { titleService} from '../../services/Interfaces/titleService';
import { ComService} from '../../services/com.service';
import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../interfaces/employee';
import { THIS_EXPR, ThrowStmt } from '@angular/compiler/src/output/output_ast';
import { interval, Observable } from 'rxjs';
import {BannerComponent} from '../../components/banner/banner.component';
import {WizardStep} from '../../directives/wizardstep';
interface formValues {

[key: string]: any;

}

const asset = function() {
 this.name = 'general asset';
};
asset.prototype.display = (message) => console.log(message);

const stock = function() {
  asset.call(this); // <== this makes all asset non-protypes properties available to stock
};
stock.prototype = Object.create(asset.prototype); // to extent set prototype to Object.create(base.proptotype)
stock.prototype.DisplayStockMessage = () => console.log('Im Stock!');
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
// , changeDetection: ChangeDetectionStrategy.OnPush <==this caused changes to component property not visible on the form
})
export class ListEmployeesComponent implements OnInit, AfterViewInit  {
 employees: Employee [];
 banners = ['first banner', 'second banner', 'third banner'];
 steps = ['first step', 'second step', 'third step'];
 createForm: FormGroup;
 count: number;
 pageTitle = 'Employee List';
 defaultAdd = 'default scam add';
 currentTime = new Date();

 @ViewChildren(BannerComponent)
allBanners: QueryList< BannerComponent>;

@ContentChildren(WizardStep, {read: ElementRef})
wizardSteps: QueryList< ElementRef>;

currentAddIndex = 0;
BannerAdds = [
'Best Shows Ever',
'Summer Hats 50% off!',
' Buy 1 GET 1 Free!',
'3 items for the Price of 2!'

];

BannerCoutries = [
  'USA',
  'CANADA',
  'MEXICO',
  'ARGENTINA'
  
  ];
  DfaultBannerName='Default Banner Name';

  constructor(private employeeService: EmployeeService, private builder: FormBuilder,
              // tslint:disable-next-line: no-shadowed-variable
              private ref: ChangeDetectorRef,
              @Inject('titleService') private  titleService: titleService ,
              @Inject('currentappverion') public   appversion: string[] ,
              private comService: ComService
              ) {
                let test=1;
               }
ngAfterViewInit() {
 this.allBanners.forEach((banner, i ) => {banner.Title = this.banners[i]; });

}
callBannersMethods()
{
  this.allBanners.forEach(b=>{b.sayHi();});

}

  ngOnInit() {
    const emp = this.employeeService.GetEmployees();

   // this.StartCounting();

    this.employees = this.employeeService.GetDistinctEmployeesbyFirstName(emp);
    this.createForm = this.builder.group({fistName: ['hasan'], lastName: ['hasani']}, { updateOn: 'blur' } );
    this.pageTitle = this.titleService.GetComponentTitle();
    this.createForm.valueChanges.subscribe((x: formValues)  => {
      this.employees.push(
    { FirtName: x.fistName,
      LastName: x.lastName}as Employee);

    });
 //   this.ref.markForCheck();

 setInterval(()=>{this.UpdateBanner()},2000);
  }

  TestJavascriptInhertance() {

    const as = new stock();
    as.display('salam');
    as.DisplayStockMessage();
    console.log(as.name);
  }

  StartCounting() {this.comService.Count.subscribe(x => this.count = x);
   // this.comService.GetVisitorCount();
                   this.comService.connect();

  }
  UpdateBanner() {
    this.currentAddIndex = (this.currentAddIndex + 1) % 4;
    this.currentTime = new Date();
  }
  updateBannnerName(bannerName:string)
  {

    this.DfaultBannerName=bannerName;
  }
}
