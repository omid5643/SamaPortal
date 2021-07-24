import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {map, filter, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public currentModule = 'default Module';
  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
   // throw new Error("Method not implemented.");

   this._router.events.pipe(
   filter(e => e instanceof NavigationEnd),
   map(e => this._activatedRoute),
   map(AR => { while (AR.firstChild) { AR = AR.firstChild; } return AR; }),
   mergeMap(AR => AR.data)


   ).subscribe(data=>{this.currentModule=data['ModuleName']});
  }
}
