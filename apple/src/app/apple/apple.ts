import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppleModel } from '../apple-model';

@Component({
  selector: 'app-apple',
  imports: [],
  templateUrl: './apple.html',
  styleUrl: './apple.css',
})
export class Apple {

  static appleUrl : string = '/apple.jpeg'

  @Input() apple : AppleModel = {id: -1}
  @Output() deleteApple = new EventEmitter<AppleModel>();
  @Output() addApple = new EventEmitter<AppleModel>();


}
