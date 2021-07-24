import {NgModule, ModuleWithProviders} from '@angular/core';
import { Logger} from '../../services/logger';
import { InjectionToken} from '@angular/core';




@NgModule(
    { 
     // providers:[{provide:Logger, useClass:Logger,multi:true}] <== module with providers overwrites this

    })
export class LogModule {

    static WithLogTypes(logtype: string): ModuleWithProviders<LogModule> {
      return {
        ngModule: LogModule,
        providers: [
          {provide: 'logtypetoken' , useValue: logtype},
          {provide:Logger, useClass:Logger}
      ]

      } as ModuleWithProviders<LogModule>;

    }
   

}
