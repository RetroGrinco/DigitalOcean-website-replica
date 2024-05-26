import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSomeAction]'
})
export class SomeActionDirective {

  constructor(private element: ElementRef) { 
    
  }

  @HostListener('mouseenter') OnMouseEnter() {
    this.element.nativeElement.style.width      = "35%"
    this.element.nativeElement.style.margin     = "1.5em auto"
    this.element.nativeElement.style.fontSize   = "1.5em";
    this.element.nativeElement.style.transition = ".5s";
  }

  @HostListener('mouseleave') OnMouseleave() {
    this.element.nativeElement.style.width      = "25%"
    this.element.nativeElement.style.margin     = "1em auto"
    this.element.nativeElement.style.fontSize   = "1em";
    this.element.nativeElement.style.transition = ".5s";
  }

}
