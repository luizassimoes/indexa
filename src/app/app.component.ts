import { CommonModule } from '@angular/common';
import { FormularioContatoComponent } from './paginas/form-contato/form-contato.component';
import { ListContatoComponent } from './paginas/list-contato/list-contato.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormularioContatoComponent,
    ListContatoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
