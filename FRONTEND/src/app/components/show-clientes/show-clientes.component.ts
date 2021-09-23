import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service'

@Component({
  selector: 'app-show-clientes',
  templateUrl: './show-clientes.component.html',
  styleUrls: ['./show-clientes.component.css']
})
export class ShowClientesComponent implements OnInit {

  clientes:any = []

  constructor(private ClientService: ClientService) { }

  ngOnInit(): void {
    this.ClientService.getClientes()
    .subscribe(
      res => this.clientes=res,
      err => console.log(err)
    );
  }

}
