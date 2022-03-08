import { Component, OnInit } from '@angular/core';
import { ICliente } from 'src/app/models/ICliente.models';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: ICliente[];
  cliente: ICliente = {
    nombre: "",
    apellido: "",
    email: "",
    saldo: 0,
    id: ''
  }

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

  agregar({value, valid}: {value: ICliente, valid: boolean}){
    if (!valid) {
      Swal.fire({
        icon: 'error',
        text: '¡Debe diligenciar todos los campos antes de guardar!'
      })
    } else {

    }
  }

}
