import { Directive, AfterViewInit, ElementRef, ViewChild, Input, HostListener, Renderer2 } from '@angular/core';
import * as bootstrap from 'bootstrap';
@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input({ required: true }) toolTipText?: string;
  @Input() position: string = 'top';
  @Input() backColor: string = 'black';
  @Input() color: string = 'white';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {

  }



}
