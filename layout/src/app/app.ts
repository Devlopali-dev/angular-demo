import { Component, signal } from '@angular/core';
import { Footer } from './footer/footer';
import { Main } from './main/main';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Footer, Main, Header],
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('layout');
}
