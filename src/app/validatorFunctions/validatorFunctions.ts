

import { ValidatorFn, AbstractControl} from '@angular/forms';


export const ForbiddenNameValidator = (namereg: RegExp): ValidatorFn =>
(control: AbstractControl): {[key: string]: any}|null => {

 return  namereg.test(control.value) ? {invalidname: true} : null;

};
