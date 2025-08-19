import { Directive, AfterViewInit, ElementRef, ViewChild, Input, HostListener, Renderer2 } from '@angular/core';
import * as bootstrap from 'bootstrap';
@Directive({
  selector: '[appTooltip]',
  standalone: true
})
export class TooltipDirective {
  @Input({ required: true }) toolTipText: string = "";
  @Input() position: string = 'top';
  @Input() backColor: string = 'black';
  @Input() color: string = 'white';
  @Input() size: string = '16px';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.el.nativeElement, 'tooltip-parent');
  }
  private tooltipEl!: HTMLElement | null;

  @HostListener('mouseenter') onMouseEnter() {
    this.removeTooltip()
    this.tooltipEl = this.renderer.createElement('span')
    this.renderer.setProperty(this.tooltipEl, 'innerText', this.toolTipText);
    this.renderer.addClass(this.tooltipEl, 'tooltip-inner');
    this.renderer.addClass(this.tooltipEl, this.position);
    this.renderer.setStyle(this.tooltipEl, 'background-color', this.backColor);
    this.renderer.setStyle(this.tooltipEl, 'color', this.color)
    this.renderer.setStyle(this.tooltipEl, 'font-size', this.size)
    this.renderer.appendChild(this.el.nativeElement, this.tooltipEl);
    this.showTooltip()

  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip() {
    if (this.tooltipEl) {
      this.renderer.setStyle(this.tooltipEl, 'opacity', '1');
      this.renderer.setStyle(this.tooltipEl, 'pointer-events', 'auto');
    }
  }

  private hideTooltip() {
    if (this.tooltipEl) {
      this.renderer.setStyle(this.tooltipEl, 'opacity', '0');
      this.renderer.setStyle(this.tooltipEl, 'pointer-events', 'none');
    }
  }

  private removeTooltip() {
    if (this.tooltipEl) {
      this.renderer.removeChild(this.el.nativeElement, this.tooltipEl);
      this.tooltipEl = null;
    }
  }
}