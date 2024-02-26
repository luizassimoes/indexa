import { Routes } from '@angular/router';
import { FormularioContatoComponent } from './paginas/form-contato/form-contato.component';
import { ListContatoComponent } from './paginas/list-contato/list-contato.component';

export const routes: Routes = [
  {
    path: 'formulario',
    component: FormularioContatoComponent
  },
  {
    path: 'lista-contatos',
    component: ListContatoComponent
  },
  {
    path: '',
    redirectTo: '/lista-contatos',
    pathMatch: 'full'
  }
];
