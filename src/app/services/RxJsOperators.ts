import { range, observable,Observable,of } from 'rxjs';
 import { map, filter,throttleTime ,delay} from 'rxjs/operators';

export class MyRxJsOperators
{ private static fs = require('fs');


public static createFile(name) {

    this.fs.writeFile(name+'.txt', 'helooo!','ascii',  function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("File created!");
    });
}
   

public static CreateDelayObservable(delaySeconds:number):Observable<any>
{
  let myObs=new Observable((observer)=>
  { 
      let numbers=[1,2,3,4,5,6,7,8,9];
      for(let number of  numbers )
      {
      //  delay(delaySeconds);
        observer.next(number);

      }
  

      
  });
  // return of(myObs)
       // .pipe(delay(2000));
 return myObs;

}


public static TestNumberObservable()

{
    MyRxJsOperators.CreateDelayObservable(1000).pipe(delay(2000),map(x=>x*x)).subscribe(x=>console.log(x));

}



    public static TestRangeOperator()
    {
      //sqrs of 5 with even indexes i in the set 0 ,100,...
        let fiveSqrs= range(0,200).pipe(
           
            filter(x=>x%5==0),
            map(x=>x*x),
            filter((x,i)=>i%2==0)
        )
        fiveSqrs.subscribe(x=>console.log(x));
  

    }

}