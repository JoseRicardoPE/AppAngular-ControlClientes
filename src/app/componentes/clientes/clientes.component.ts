import { Component, OnInit } from '@angular/core';
import { ICliente } from 'src/app/models/ICliente.models';


import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: ICliente[];

  constructor(private clientesServicio: ClienteService) { }

  ngOnInit(): void {
    this.clientesServicio.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
      }
    );
  }

  getSaldoTotal(){
    let saldoTotal:number = 0;

    if (this.clientes) {
      this.clientes.forEach(cliente => {
        saldoTotal += cliente.saldo;
      })
    }
    return saldoTotal;
  }

}
