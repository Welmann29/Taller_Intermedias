import { Component, OnInit } from '@angular/core';
import { RegistroClientes } from '../../models/RegistroCliente'
import { ClientService } from '../../services/client.service'

@Component({
  selector: 'app-update-clientes',
  templateUrl: './update-clientes.component.html',
  styleUrls: ['./update-clientes.component.css']
})
export class UpdateClientesComponent implements OnInit {

  cliente: RegistroClientes = {
    dpi: '',
    nombres: '',
    apellidos: '',
    sexo: '',
    fecha_nacimiento: '',
    mascota_preferida: ''
  };

  resRegistro: any = {};
  res = "";

  constructor(private ClientService:ClientService) { }

  ngOnInit(): void {
  }

  actualizar(){
    this.cliente.sexo = parseInt(this.cliente.sexo)
    let temporal = this.cliente.fecha_nacimiento.toString().split('/')
    this.cliente.fecha_nacimiento = temporal[2]+"-"+temporal[1]+"-"+temporal[0]
    this.cliente.mascota_preferida = parseInt(this.cliente.mascota_preferida)
    return this.ClientService.updateCliente(this.cliente)
    .subscribe(
      res => {
        console.log(res)
        this.resRegistro = res;
        if(this.resRegistro.affectedRows && this.resRegistro.affectedRows >= 1){
          this.res = "Actualizacion completada exitosamente"
        }else{
          this.res = "Ha ocurrido un error, por favor intenta de nuevo"; 
        }
      },
      err => {
        this.res = "Ha ocurrido un error, por favor intenta de nuevo"; 
        console.log(err)
      }
    );
  }
}
