import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-task2-solution',
  templateUrl: './task2-solution.component.html',
  styleUrls: ['./task2-solution.component.scss'],
})
export class Task2SolutionComponent implements AfterViewInit, AfterViewChecked {
  @ViewChildren('child', { read: ElementRef })
  childComponent!: QueryList<ElementRef>;
  @ViewChild('viewContainer', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;
  @ViewChild('template') template!: TemplateRef<HTMLElement>;

  remove() {
    this.viewContainer.remove();
  }

  ngAfterViewChecked() {
    console.log('number of child component' + this.childComponent.length);
  }

  ngAfterViewInit() {
    this.viewContainer.createEmbeddedView(this.template);
  }
}
