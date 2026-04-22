import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppleBasket } from './apple-basket/apple-basket';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppleBasket],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('apple');
}
