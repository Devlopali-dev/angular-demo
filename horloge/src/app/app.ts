import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ClockContainer} from './clock-container/clock-container';

@Component({
  selector: 'app-root',
  imports: [ClockContainer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  hasClock: boolean = false;

  handleHasClock() {
    this.hasClock = !this.hasClock;
  }
}
