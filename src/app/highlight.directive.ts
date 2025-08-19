import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseOver() {
    this.el.nativeElement.style.color = 'blue'
  }
  @HostListener('mouseleave') onMouseOut() {
    this.el.nativeElement.style.color = 'black'
  }

}
