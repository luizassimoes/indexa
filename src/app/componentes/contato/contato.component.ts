import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  @Input() nome: string = ''
  @Input() telefone: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
