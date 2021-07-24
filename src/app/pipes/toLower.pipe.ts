import {Pipe,PipeTransform} from '@angular/core';

@Pipe({name:'ToLower'})
export class ToLower implements PipeTransform
{
    transform(value: string):string {
        return value.toLowerCase();
    }

}