import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-clock',
  imports: [],
  templateUrl: './clock.html',
  styleUrl: './clock.css',
})
export class Clock implements OnChanges {
  color: string = 'black';

  @Input() internalClock!: Date ;

  ngOnChanges(change: SimpleChange): void {
    console.log(this.internalClock);
    if ((change['internalClock'].currentValue as Date).getSeconds() % 2 === 1) {
      console.log('Change detected:', change);
      this.color = 'red';
    } else {
      console.log('No change detected.');
    this.color = 'black';
    }
  }


}
