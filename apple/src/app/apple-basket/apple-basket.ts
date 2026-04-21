import { Component } from '@angular/core';
import { AppleModel } from '../apple-model';

@Component({
  selector: 'app-apple-basket',
  imports: [],
  templateUrl: './apple-basket.html',
  styleUrl: './apple-basket.css',
})
export class AppleBasket {
  pannier: AppleModel[] = []
  private id: number;

  constructor() {
    this.pannier = []
    this.id= 0
  }

  addApple() {
    let index = this.pannier.length < 0 ? this.pannier.length + 1 : 1;

    this.id = index++;
    console.log('index', index);

    this.pannier.push({ id: this.id})
  }
}
