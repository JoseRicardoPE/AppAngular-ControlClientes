import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/ICliente.models';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  cliente: Cliente = {
    nombre: '', 
    apellido: '',
    email: '', 
    saldo: 0
  }

  id:string;

  constructor(private clientesServicio: ClienteService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clientesServicio.getCliente(this.id).subscribe((cliente: Cliente) => {
      this.cliente = cliente;
    });
  }
  guardar({value, valid}: {value: Cliente, valid: boolean}){
    if(!valid){
      Swal.fire({
        icon: 'error',
        text: '¡Debe diligenciar todos los campos antes de guardar!'
      });
    } else {
      value.id = this.id;
      this.clientesServicio.modificar(value);
      this.router.navigate(['/']);
    }
  }
}
