import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppleModel } from '../apple-model';

@Component({
  selector: 'app-apple',
  imports: [],
  templateUrl: './apple.html',
  styleUrl: './apple.css',
})
export class Apple {

  appleUrl : string = '/apple.jpeg'

  @Input() apple : AppleModel = {id: -1}
  @Input() index : number = 0
  @Output() deleteApple = new EventEmitter<AppleModel>();


}
