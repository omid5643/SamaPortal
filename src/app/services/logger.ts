
import {Injectable, Inject, InjectionToken} from '@angular/core';

export enum logtypes { console= 'console', alert= 'alert'}
@Injectable()
export class Logger {
  constructor( @Inject('logtypetoken')  private logType: string) {

  }
    log(message: string) {

      (this.logType === logtypes.alert) ? alert(message) : console.log(message);


    }


}
