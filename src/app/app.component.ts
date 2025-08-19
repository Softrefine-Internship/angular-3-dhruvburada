import { Component } from '@angular/core';
import { InputboxComponent } from './inputbox/inputbox.component';
import { TooltipComponent } from './tooltip/tooltip.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [InputboxComponent, TooltipComponent]
})
export class AppComponent {
  title = 'angular-3';
}
