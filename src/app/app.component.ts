import { Component } from '@angular/core';
import { InputboxComponent } from './inputbox/inputbox.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { HighlightDirective } from './highlight.directive';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [InputboxComponent, TooltipComponent, HighlightDirective]
})
export class AppComponent {
  title = 'angular-3';
}
