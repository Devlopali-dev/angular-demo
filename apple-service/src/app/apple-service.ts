import { Injectable } from '@angular/core';
import { AppleModel } from './apple-model';

@Injectable({
  providedIn: 'root',
})
export class AppleService {

  apples: Array<AppleModel> = [];

  getApples() {
    return this.apples;
  }

  getAppleById(id: number) {
    return this.apples.find(apple => apple.id === id);
  }

  getAppleIndexById(id: number) {
    return this.apples.findIndex(apple => apple.id === id);
  }

  addNewApple() {
    const apple: AppleModel = {
      id: this.apples.reduce((prev, apple) =>
        (prev > apple.id ? prev : apple.id), 0) + 1,
    };
      this.apples = [...this.apples, apple];  }

  addApple( apple: AppleModel) {
    this.apples.push(apple);
  }

  removeApple(apple: AppleModel) {
    const index = this.apples.findIndex(a => a.id === apple.id);
    if (index !== -1) {
      this.apples.splice(index, 1);
    }
  }

}
