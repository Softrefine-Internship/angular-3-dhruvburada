// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import * as bootstrap from 'bootstrap';
bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
