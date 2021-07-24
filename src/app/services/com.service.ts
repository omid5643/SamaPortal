
import {Injectable} from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';
import { delay } from 'rxjs/operators';
import * as signalR from '@aspnet/signalr';
@Injectable({providedIn : 'root'})
export class ComService {
    constructor()
    {
      this.Count=new Subject<number>();  
    }

Count:Subject<number>;
private _hubUrl = `http://localhost:58352/InnovideaHub`;
private _connection: signalR.HubConnection;

GetVisitorCount()
{
   this.Count.next(17);
}
connect() {
    this._connection = new signalR.HubConnectionBuilder()
      .withUrl(this._hubUrl)
      .build();

    this._connection.on('BoradCast', (data: any) => {
        this.Count.next(<number>data);
      
    });

    // this._connection.onclose(() => {
    //   this._logger.error('SignalR: connection lost, retrying...');
    //   this.emitConnectionStatus(false);
    //   this.connectFunc();
    // });

    // return this._ngZone.runOutsideAngular(() => this.connectFunc());
    this._connection.start();
    //this._connection.invoke("",{}); <== this is how you would invoke a hub method
  }

}


