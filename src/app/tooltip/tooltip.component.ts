import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TooltipDirective } from './tooltip.directive';
@Component({
  selector: 'app-tooltip',
  imports: [FormsModule, CommonModule, TooltipDirective],
  standalone: true,
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  position: string = "top";
  color: string = "white";
  backColor: string = "black";
  size: string = `16px`
  sizes: number[] = [12, 14, 16, 20, 24, 28, 36];

}
