import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IConfiguracion } from 'src/app/models/IConfiguracion.models';
import { ConfiguracionService } from 'src/app/services/configuracion/configuracion.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {
  
  permitirRegistro: boolean | any = false;

  constructor(private router: Router,
              private configuracionServicio: ConfiguracionService) { }

  ngOnInit() {
    this.configuracionServicio.getConfiguracion().subscribe(
      (configuracion: IConfiguracion) => {
        this.permitirRegistro = configuracion.permitirRegistro;
      }
    )
  }

  guardar(){
    let configuracion = {permitirRegistro: this.permitirRegistro};
    this.configuracionServicio.modificarConfiguracion(configuracion);
    this.router.navigate(['/']);
  }
}

