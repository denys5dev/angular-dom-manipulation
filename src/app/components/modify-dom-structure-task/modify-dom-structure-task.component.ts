import {
  AfterViewChecked,
  Component,
  ElementRef,
  Host,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-modify-dom-structure-task',
  templateUrl: './modify-dom-structure-task.component.html',
  styleUrls: ['./modify-dom-structure-task.component.scss'],
})
export class ModifyDomStructureTaskComponent
  implements OnInit, AfterViewChecked
{
  @ViewChildren('child', { read: ElementRef })
  childComponent!: QueryList<ElementRef>;

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef<Host>
  ) {
    // this.childComponent.first.nativeElement
  }

  ngOnInit() {}

  ngAfterViewChecked() {
    console.log('number of child component' + this.childComponent.length);
  }

  remove() {
    if (this.childComponent.first.nativeElement)
      this.renderer.removeChild(
        this.hostElement.nativeElement,
        this.childComponent.first.nativeElement,
        true
      );
  }
}

// if jquery created nodes so you can you jquery to remove them
// if nodes created by angular you must use angular tools because
// VIEW (ViewCOntainerRef) will be not updated properly with Jquery
