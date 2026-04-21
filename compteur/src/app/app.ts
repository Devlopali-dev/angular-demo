import { Component, ElementRef, Renderer2 } from '@angular/core';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  compteur: number = 0;

  constructor(
    private renderer2: Renderer2,
    private elementRef: ElementRef,
  ) {
    this.compteur = 600;
  }

  increment10() {
    this.compteur += 10;
    this.checkCounter();
  }

  increment1() {
    this.compteur += 1;
    this.checkCounter();
  }

  decrement10() {
    this.compteur -= 10;
    this.checkCounter();
  }

  decrement1() {
    this.compteur -= 1;
    this.checkCounter();
  }

  reset() {
    this.compteur = 0;
    this.checkCounter();
  }

  public surprise(): void {
    const canvas = this.renderer2.createElement('canvas');
    this.renderer2.appendChild(this.elementRef.nativeElement, canvas);
    const myConfetti = confetti.create(canvas, {
      resize: true
    });
    myConfetti();
  }

  private checkCounter() {
    if (this.compteur === 777) {
      this.surprise();
    }
  }
}
