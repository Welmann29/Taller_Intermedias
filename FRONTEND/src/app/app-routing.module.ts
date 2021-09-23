import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteClientesComponent } from './components/delete-clientes/delete-clientes.component';
import { InicioComponent } from './components/inicio/inicio.component'
import { PostClientesComponent } from './components/post-clientes/post-clientes.component'
import { ShowClientesComponent } from './components/show-clientes/show-clientes.component';
import { UpdateClientesComponent } from './components/update-clientes/update-clientes.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },{
    path: 'registroClientes',
    component: PostClientesComponent
  },{
    path: 'updateClientes',
    component: UpdateClientesComponent
  },{
    path: 'deleteClientes',
    component: DeleteClientesComponent
  },{
    path: 'showClientes',
    component: ShowClientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }