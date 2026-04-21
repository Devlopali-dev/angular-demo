import { Component } from '@angular/core';

@Component({
  selector: 'app-palette',
  imports: [],
  templateUrl: './palette.html',
  styleUrl: './palette.css',
})
export class Palette {
  colors: string[] = [
    'red',
    'blue',
    'green',
    'yellow',
    'orange',
    'purple',
    'pink',
    'brown',
    'gray',
    'black',
  ];
}
