import { Component } from '@angular/core';
import { Logo } from './logo/logo'
import { Navigation } from './navigation/navigation'

@Component({
  selector: 'app-header',
  imports: [Logo, Navigation],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
