
import {Input} from '@angular/core';
export class BaseComponent {
    private _title: string ;
    constructor() {}
get Title() {
  return this._title;

}
@Input()
set Title(value: string) {
this._title = value;
}



}
