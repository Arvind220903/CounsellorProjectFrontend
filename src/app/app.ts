import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Registrationservice } from './registrationservice';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('miniapp');
  reg=inject(Registrationservice)
}
