import { Component } from '@angular/core';

@Component({

  selector: 'app-inputbox',
  standalone: true,
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.scss'],

})
export class InputboxComponent {

  trimText(nameInput: HTMLInputElement): void {
    nameInput.value = nameInput.value.trim();
  }

}
