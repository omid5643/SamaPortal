import { Component, OnInit, AfterContentInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html'
 //, styleUrls: ['./step.component.less']
})
export class StepComponent implements OnInit, AfterContentInit  {

  stepName: string;
  constructor()
  {
    this.stepName = 'not implemented';
  }

  @ContentChild('stepParagraph', {static: false})
  Paragraph: ElementRef;

   ngAfterContentInit(): void {
   this.stepName = this.Paragraph.nativeElement.innerText;
  }


  ngOnInit() {
  }

}
