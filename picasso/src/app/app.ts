import { Component, signal } from '@angular/core';
import { Palette } from './palette/palette';

@Component({
  selector: 'app-root',
  imports: [Palette],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('picasso');
}
