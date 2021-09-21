

// pbd
//import{CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken,APP_INITIALIZER,DoBootstrap,ApplicationRef} from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleService} from './services/title.service';
import { TestConceptsComponent } from './Routed/TestConcepts/test-concepts/test-concepts.component';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BsModalComponent } from './components/bs-modal.component';




export const APP_VERSION_TOKEN :InjectionToken<string>=new InjectionToken<string>('currentappverion');
export function InitApp()
{
  console.log('app int called!');
  return ()=>1; //sabaei app intilizer function  needs to return a function
}

@NgModule({
  declarations: [
    AppComponent,
    TestConceptsComponent,
    BsModalComponent,
    
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    {provide: 'titleService', useClass: TitleService},
    {provide: 'currentappverion', useValue: 'angular8',multi:true},
    {provide: 'currentappverion', useValue: 'angular7', multi:true},
    {provide: APP_INITIALIZER, useFactory: InitApp, multi:true}
],
entryComponents:[AppComponent]
  //bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap(appRef:ApplicationRef): void {
   appRef.bootstrap(AppComponent);
  }
}
