import { ChangeDetectorRef, Component } from '@angular/core';
import { Clock } from '../clock/clock';

@Component({
  selector: 'app-clock-container',
  imports: [Clock],
  templateUrl: './clock-container.html',
  styleUrl: './clock-container.css',
})
export class ClockContainer {
  clock: Date = new Date();
  interval: any;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.clock = new Date();
      this.changeDetectorRef.markForCheck();
    }, 1000);
  }

  ngOnDestroy(): void {
    console.log('Clock destroyed');
    clearInterval(this.interval);
  }
}
