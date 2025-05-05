import { Injectable } from '@angular/core';

import {
  Firestore,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  collectionData,
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

export interface Pessoa {
  cpf: string;
  email: string;
  nome: string;
  telefone?: string; // opcional
}

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  constructor(private firestore: Firestore) {}

  addPessoa(novaPessoa: Pessoa) {
    // pega-se a referencia psra a colecao
    const ref = collection(this.firestore, 'pessoas');
    addDoc(ref, novaPessoa);
  }

  listarPessoas() : Observable<Pessoa[]> {
    const ref = collection(this.firestore, 'pessoas');
    return collectionData(ref) as Observable<Pessoa[]> ;
  }
}
