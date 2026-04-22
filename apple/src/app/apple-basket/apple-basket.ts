import { Component } from '@angular/core';
import { AppleModel } from '../apple-model';
import { Apple } from '../apple/apple';

@Component({
  selector: 'app-apple-basket',
  imports: [Apple],
  templateUrl: './apple-basket.html',
  styleUrl: './apple-basket.css',
})
export class AppleBasket {
  apples: Array<AppleModel>;

  constructor() {
    this.apples = []
  }

  addApple() {
    const newApple: AppleModel = {
      id: this.apples.reduce((prev, apple) =>
            (prev > apple.id ? prev : apple.id), 0) + 1
    }
    this.apples = [...this.apples, newApple]
  }

  deleteApple(apple: AppleModel) {
    this.apples = this.apples.filter(a => a !== apple);
  }
}
