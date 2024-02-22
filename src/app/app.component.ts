import { Component } from '@angular/core';

interface Contato {
  id: number,
  nome: string,
  telefone: string
}

import * as agenda from './agenda.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alfabeto: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  contatos: Contato[] = agenda;

  filtrarContatosPorLetraInicial(letra: string) : Contato[] {
    return this.contatos.filter( contato => {
      return contato.nome.toLowerCase().startsWith(letra)
    } )
  }
}
