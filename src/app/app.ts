import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { NgClass } from '@angular/common';
import { Ngclass } from './ngclass/ngclass';
import { Registrationservice } from './registrationservice';
import { Register } from './register/register';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login,NgClass,Ngclass,Register],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('miniapp');
  reg=inject(Registrationservice)
}
