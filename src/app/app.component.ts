import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [FormsModule, MatButtonModule, MatIconModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'firebase';
  email = '';
  senha = '';
  constructor(private autenticador: Auth) {}

  logar() {
    signInWithEmailAndPassword(this.autenticador, this.email, this.senha)
      .then(() => (this.title = 'Sucesso'))
      .catch(() => (this.title = 'Erro'));
  }
  enviarEmail() {
    sendPasswordResetEmail(this.autenticador, this.email);
  }

  criarUsuario() {
    createUserWithEmailAndPassword(this.autenticador, this.email, this.senha);
  }
}
