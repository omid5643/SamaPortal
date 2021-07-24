import {CanDeactivate} from '@angular/router';
import {CreateEmployeeComponent} from '../Employee/create-employee.component';
import {Injectable} from '@angular/core';

@Injectable()
export class CreateEmployeeFormCanDeactivateService implements CanDeactivate<CreateEmployeeComponent> {
    canDeactivate(component: CreateEmployeeComponent ): boolean {
        if (component.employeeForm.dirty) {

            return confirm('are you sure you want to navigate away?');
        }

        return true;
    }

}
