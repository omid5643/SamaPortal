import { Component, OnInit, Input, OnChanges, SimpleChanges , ChangeDetectionStrategy,Output,EventEmitter} from '@angular/core';
import {BaseComponent} from '../../components/base';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent extends BaseComponent implements OnInit, OnChanges {

@Input()
 public currentAdd: string;

 @Output()
 public BannerName: EventEmitter<string>=new EventEmitter<string>();//needs to be initilized

 @Input()
 public currentTime: Date;
 private _currentCountry;

 @Input()
 public  set currentCountry(val: string) {
   console.log(`Previus Country:${this._currentCountry ? 'UNDEFINED' : this.currentCountry}`);
   console.log(`current Country:${val}`);
   this._currentCountry = val;

 }
 public  get currentCountry(): string {
  return this._currentCountry ;

}
  constructor() { super(); // gotta have this call if extending from a base class
    let test=1;
  }



  ngOnChanges(changes: SimpleChanges): void {

    const perviusAdd =  changes.currentAdd.previousValue as string; // each input property(is a simple change) is property of simple changes opject
    const currentAdd =  changes.currentAdd.currentValue as string;

    const previusTime =  changes.currentTime.previousValue as Date;
    const currentTime =  changes.currentTime.currentValue as Date;

  }

  ngOnInit() {
    const test = 1;
  }

  setBannerName(){
    this.BannerName.emit('Fancy Baner');
  }

  sayHi(){alert('im child component!');}
}
