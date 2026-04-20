import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contact } from './contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  contact: Contact = {
    nom: 'Dupont',
    prenom: 'Jean',
    age: 30,
    adresse: {
      rue: '18 rue des champs',
      codePostal: 75000,
      ville: 'Paris'
    },
    profession: 'Dev junior'
  }
}
