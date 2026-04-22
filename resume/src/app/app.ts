import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SummeryPipe } from './summery-pipe';

@Component({
  selector: 'app-root',
  imports: [SummeryPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal(
    ' Loremp ipsum dolor sit amet, consectetur adipiscing elit.\n' +
      '      Loremp ipsum dolor sit amet, consectetur adipiscing elit.\n' +
      '      Loremp ipsum dolor sit amet, consectetur adipiscing elit.\n' +
      '      Loremp ipsum dolor sit amet, consectetur adipiscing elit.\n' +
      '      Loremp ipsum dolor sit amet, consectetur adipiscing elit.\n' +
      '      Loremp ipsum dolor sit amet, consectetur adipiscing elit.\n' +
      '      Loremp ipsum dolor sit amet, consectetur adipiscing elit.\n' +
      '      Loremp ipsum dolor sit amet, consectetur adipiscing elit.\n' +
      '      Loremp ipsum dolor sit amet, consectetur adipiscing elit.\n' +
      '      Loremp ipsum dolor sit amet, consectetur adipiscing elit.\n' +
      '      Loremp ipsum dolor sit amet, consectetur adipiscing elit.\n' +
      '      Loremp ipsum dolor sit amet, consectetur adipiscing elit.\n' +
      '      Loremp ipsum dolor sit amet, consectetur adipiscing elit.\n' +
      '      Loremp ipsum dolor sit amet, consectetur adipiscing elit.',
  );
}
