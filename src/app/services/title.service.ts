
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class TitleService {

    GetComponentTitle(): string {
   return 'Title from Service';

    }

}
