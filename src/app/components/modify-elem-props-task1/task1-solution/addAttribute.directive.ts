import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[addAttribute]',
})
export class AddAttributeDirective implements OnInit {
  @Input() addAttribute!: string;
  constructor(
    private element: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2
  ) {}

  ngOnInit(): void {
    //** DONT CALL SET ATTRIBUTE ETC DIRECTLY ON THE NATIVE ELEMENT THIS CAN BE A PROBLEM WHEN YOU MOVE YOU APP INTO DIFFERENT PLATFORM FOR EXAMPLE: NATIVE SCRIPT
    //** this.element.nativeElement.setAttribute(this.addAttribute, '');

    //** USE RENDERER TO AVOID ERRORS OF THIS LOGIC FOR DIFFERENT PLATFORMS
    this.renderer.setAttribute(
      this.element.nativeElement,
      this.addAttribute,
      ''
    );
  }
}
