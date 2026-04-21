import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  pyramid: string[] = [];
  height: number = Math.floor(Math.random() * 10) + 1;

  constructor() {

    for (let i = 0; i < this.height; i++) {
      this.pyramid[i] = '';

      for (let j = 0; j < i + 1; j++) {
      this.pyramid[i] += '*';
      }
    }
  }
}
