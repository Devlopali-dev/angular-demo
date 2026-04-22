import { Component } from '@angular/core';
import { AppleModel } from '../apple-model';

@Component({
  selector: 'app-apple-basket',
  imports: [],
  templateUrl: './apple-basket.html',
  styleUrl: './apple-basket.css',
})
export class AppleBasket {
  apples: Array<AppleModel>;
  private id: number;

  constructor() {
    this.apples = []
    this.id= 0
  }

  addApple() {
    const newApple: AppleModel={
      id: this.apples.reduce((prev, apple) =>
            (prev > apple.id ? prev : apple.id), 0) + 1
    }
    this.apples = [...this.apples, newApple]
  }

  deleteApple(apple: AppleModel) {
    this.apples.splice(this.apples.indexOf(apple), 1);
  }
}
