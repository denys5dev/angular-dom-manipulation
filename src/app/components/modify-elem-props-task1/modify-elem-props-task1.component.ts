//** */ Problem of this solution we are mixing presentation logic with render logic

import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-modify-elem-props-task1',
  template: `<span #el>I want to be green</span>`,
  styleUrls: ['./modify-elem-props-task1.component.scss'],
})
export class ModifyElemPropsTask1Component implements OnInit, AfterViewInit {
  @ViewChild('el')
  span!: ElementRef<HTMLSpanElement>;

  constructor() {}

  ngOnInit() {
    // No access to the span!
    // this.span.nativeElement
  }

  ngAfterViewInit() {
    // Access to the span will be here !
    this.span.nativeElement.setAttribute('highlight', '');
    // console.log(this.span.nativeElement);
  }
}
