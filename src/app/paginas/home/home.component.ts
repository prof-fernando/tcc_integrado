import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { PessoaService } from '../../servicos/pessoa.service';

@Component({
  selector: 'app-home',
  imports: [MatToolbarModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private pessoaService: PessoaService) {
    pessoaService.addPessoa({
      nome: 'professor',
      cpf: '23',
      email: 'abc',
    });
  }
}
