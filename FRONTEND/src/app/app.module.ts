import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PostClientesComponent } from './components/post-clientes/post-clientes.component';
import { ClientService } from './services/client.service';
import { UpdateClientesComponent } from './components/update-clientes/update-clientes.component';
import { DeleteClientesComponent } from './components/delete-clientes/delete-clientes.component';
import { ShowClientesComponent } from './components/show-clientes/show-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    InicioComponent,
    PostClientesComponent,
    UpdateClientesComponent,
    DeleteClientesComponent,
    ShowClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
