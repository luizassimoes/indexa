import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { FormsModule } from '@angular/forms';
import { FormularioContatoComponent } from '../form-contato/form-contato.component';

import agenda from '../../agenda.json'

interface Contato {
  id: number,
  nome: string,
  telefone: string
}

@Component({
  selector: 'app-list-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    FormularioContatoComponent,
    FormsModule
  ],
  templateUrl: './list-contato.component.html',
  styleUrl: './list-contato.component.css'
})


export class ListContatoComponent {
  alfabeto: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  contatos: Contato[] = agenda;

  filtroPorTexto: string = ''

  filtrarContatosPorTexto(): Contato[] {  // ! significa o NOT em JavaScript
    if (!this.filtroPorTexto) {
      return this.contatos
    }
    return this.contatos.filter(contato => {
      return contato.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
      .includes(this.filtroPorTexto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
    })
  }

  filtrarContatosPorLetraInicial(letra: string) : Contato[] {
    return this.filtrarContatosPorTexto().filter( contato => {
      return contato.nome.toLowerCase().startsWith(letra)
    } )
  }
}
