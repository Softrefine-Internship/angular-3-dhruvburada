import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { InputboxComponent } from './inputbox/inputbox.component';
import { TooltipDirective } from './tooltip/tooltip.directive';

@NgModule({
  declarations: [
    HighlightDirective,
    TooltipDirective,

  ],
  imports: [
    BrowserModule,
    AppComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
