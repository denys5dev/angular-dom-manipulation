import { Directive, Input, ViewContainerRef } from '@angular/core';
import { PortalServiceService } from 'src/app/components/portal/portal-service.service';

@Directive({
  selector: '[appTarget]',
})
export class TargetDirective {
  @Input('appTarget') name!: string;

  constructor(
    private teleportComponent: PortalServiceService,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.teleportComponent.addTarget(this.name, this.viewContainerRef);
  }
}
