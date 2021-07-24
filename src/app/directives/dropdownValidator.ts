
import {Directive,Input} from '@angular/core';
import {Validator, AbstractControl, NG_VALIDATORS} from '@angular/forms';

@Directive(
{selector: '[AppDropDownValidator]',
providers: [{provide: NG_VALIDATORS, useExisting: AppDropDownValidator, multi: true}  ]

})

export class AppDropDownValidator implements Validator {
    private _defalutValue: string;
    @Input()
   set AppDropDownValidator(value: string) //<== needs to be the same as directive name
   {
       this._defalutValue = value;

   }
    validate(control: AbstractControl): {[key: string]: any}|null {
     return  control.value === this._defalutValue ? {dropdownnotSelected: true} : null;

    }


}
