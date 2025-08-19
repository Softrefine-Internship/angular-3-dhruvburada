import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tooltip',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  position: string = "top";
  color: string = "white";
  backColor: string = "black";
}
