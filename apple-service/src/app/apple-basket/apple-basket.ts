import { Component } from '@angular/core';
import { AppleModel } from '../apple-model';
import { Apple } from '../apple/apple';
import { AppleService } from '../apple-service';

@Component({
  selector: 'app-apple-basket',
  imports: [Apple],
  templateUrl: './apple-basket.html',
  styleUrl: './apple-basket.css',
})
export class AppleBasket {

  constructor(private service: AppleService) {
  }

  get apples(): AppleModel[] {
    return this.service.apples;
  }

  addApple() {
    this.service.addNewApple();
  }

  deleteApple(apple: AppleModel) {
    this.service.removeApple(apple);
  }
}
