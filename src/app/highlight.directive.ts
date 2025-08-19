import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseOver() {
    console.log("Mouse Enter")
    this.el.nativeElement.style.color = 'blue'
  }
  @HostListener('mouseleave') onMouseOut() {
    this.el.nativeElement.style.color = 'black'
  }

}
