import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RegistroClientes } from '../models/RegistroCliente'

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  API_URI = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getClientes(){
    return this.http.get(this.API_URI+"/Cliente");
  }

  getCliente(dpi:string){
    return this.http.get(this.API_URI+"/Cliente/"+dpi);
  }

  deleteCliente(dpi:string){
    return this.http.delete(this.API_URI+"/Cliente/"+dpi);
  }

  registrarCliente(cliente:RegistroClientes){
    return this.http.post(this.API_URI+"/Cliente",cliente);
  }
  
  updateCliente(cliente:RegistroClientes){
    return this.http.put(this.API_URI+"/Cliente",cliente);
  }
}
