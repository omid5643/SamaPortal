
import {Directive, Input} from '@angular/core';
import {Validator, AbstractControl, NG_VALIDATORS} from '@angular/forms';

@Directive(
    {
        selector: '[EqualityValidator]',
        providers: [{provide: NG_VALIDATORS, useExisting: EqualityValidator, multi: true}]

    })
export class EqualityValidator implements Validator {
    @Input()
    EqualityValidator: string;
    validate(control: AbstractControl): {[key: string]: any}|null {

        const firstControl = control.get(this.EqualityValidator.split(',')[0]);
        const secondControl = control.get(this.EqualityValidator.split(',')[1]);

        if ( firstControl  && secondControl &&  ( firstControl.value !== secondControl.value)) {
            return {notEqual: true};
        }
        return null;
    }


}
