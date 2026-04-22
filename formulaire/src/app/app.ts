import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contact } from './contact';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  contact: Contact = {
    firstName: '',
    lastName: '',
    motif: '',
    email: '',
  };
  protected readonly title = 'Forms';

  protected onSubmit(form: any) {
    console.log('Formulaire envoyé :');
    console.log(form.value);
  }
}
