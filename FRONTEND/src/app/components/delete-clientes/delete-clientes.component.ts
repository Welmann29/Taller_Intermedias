import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service'

@Component({
  selector: 'app-delete-clientes',
  templateUrl: './delete-clientes.component.html',
  styleUrls: ['./delete-clientes.component.css']
})
export class DeleteClientesComponent implements OnInit {

  cliente: any = {
    dpi: '',
  };

  resRegistro: any = {};
  res = "";

  constructor(private ClientService: ClientService) { }

  ngOnInit(): void {
  }

  borrar(){
    return this.ClientService.deleteCliente(this.cliente.dpi)
    .subscribe(
      res => {
        console.log(res)
        this.resRegistro = res;
        if(this.resRegistro.affectedRows && this.resRegistro.affectedRows >= 1){
          this.res = "Eliminaci&oacute;n completada exitosamente"
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
