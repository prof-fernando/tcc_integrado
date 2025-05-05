import { Component } from '@angular/core';
import { PessoaService, Pessoa } from '../../servicos/pessoa.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pessoa',
  imports: [CommonModule],
  templateUrl: './pessoa.component.html',
  styleUrl: './pessoa.component.scss'
})
export class PessoaComponent {

   pessoas : Pessoa[] = [];

  constructor( private servico: PessoaService ){
    servico.listarPessoas().subscribe( (resposta) =>{
      this.pessoas = resposta;
    } )  ;
  }

}
