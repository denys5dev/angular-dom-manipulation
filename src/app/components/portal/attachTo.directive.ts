import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { PortalServiceService } from 'src/app/components/portal/portal-service.service';

@Directive({
  selector: '[appAttachTo]',
})
export class AttachToDirective implements OnInit, OnDestroy {
  @Input('appAttachTo') targetName!: string;

  constructor(
    private teleportComponent: PortalServiceService,
    private templateRef: TemplateRef<any>
  ) {}

  ngOnInit() {
    this.teleportComponent.attach(this.targetName, this.templateRef);
  }

  ngOnDestroy() {
    this.teleportComponent.clear(this.targetName);
  }
}
