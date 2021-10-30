import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { SomeButtonComponent } from 'src/app/components/dynamic-components/some-button/some-button.component';

@Component({
  selector: 'app-dynamic-components',
  templateUrl: './dynamic-components.component.html',
  styleUrls: ['./dynamic-components.component.scss'],
})
export class DynamicComponentsComponent implements OnInit, AfterViewInit {
  @ViewChild('viewContainer', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;
  constructor(private factoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {}

  ngAfterViewInit() {
    const factory =
      this.factoryResolver.resolveComponentFactory(SomeButtonComponent);
    this.viewContainer.createComponent(factory);
  }
}
