import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl}  from  '@angular/forms';
import { of, combineLatest, fromEvent, interval, Observable } from 'rxjs';
import { map, mergeAll } from 'rxjs/operators';
import { Route, Router} from   '@angular/router';


const myMap = (func) => (source) => new Observable((observer) =>

source.subscribe(
val => observer.next(func(val)),
err => observer.error(err),
() => observer.complete()
)

);


@Component({
  selector: 'app-calculate-bmi',
  templateUrl: './calculate-bmi.component.html',
  styleUrls: ['./calculate-bmi.component.less']
})
export class CalculateBMIComponent  {
  height: number;
  weight: number;
  bmi: number;
  bmiForm: FormGroup;
  constructor(public _router:Router) {
this.bmiForm = new FormGroup({height: new FormControl(), weight: new FormControl(), bmi: new FormControl()});
let snapShot=this._router.routerState.snapshot;
console.log(snapShot);
   }
// tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {

    const clicks = fromEvent(document, 'click');
    clicks.pipe(map( x =>  interval(1000)), mergeAll()).subscribe(x => console.log(x) );

  }


  calculate(): void {


 let name = 'Rotary_Steerable';

var filename= this.dasherize(name);
var mdoulename= this.classify(name);


// tslint:disable-next-line: max-line-length
   //  combineLatest == > Combines multiple Observables to create an Observable whose values are calculated from the latest values of each of its input Observables
    const weight = of(this.bmiForm.controls.weight.value);
    const height = of(this.bmiForm.controls.height.value);
   // combineLatest

    const res = combineLatest(weight, height).pipe(myMap(([w, h]) => w * h));

    res.subscribe(val => this.bmiForm.controls.bmi.setValue (val));



  }

   capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.substr(1);
  }



    decamelize(str: string): string {
    return str.replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase();
  }
 
    dasherize(str: string): string {
    return this.decamelize(str).replace(/[ _]/g, '-');
  }
  
  
    classify(str: string): string {
    return str.split('.').map(part => this.capitalize(this.camelize(part))).join('.');
  }
   camelize(str: string): string {
    return str
      .replace(/(-|_|\.|\s)+(.)?/g, (_match: string, _separator: string, chr: string) => {
        return chr ? chr.toUpperCase() : '';
      })
      .replace(/^([A-Z])/, (match: string) => match.toLowerCase());
  }





}
