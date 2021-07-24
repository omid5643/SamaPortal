
export enum SeverityEnum {
  Normal,
  Warning

}

export class MessageKey {
 static readonly  Relay = 'Relay'; // acts similar to c sharp const
 constructor(){
   //  this.Relay=''; error// cant even set readonly filed in constructor
 }

}

export class Tester {
  Test() {
   
  }

}
