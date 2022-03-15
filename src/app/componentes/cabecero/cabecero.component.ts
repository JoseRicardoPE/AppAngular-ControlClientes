import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfiguracionService } from 'src/app/services/configuracion/configuracion.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: string | any;
  permitirRegistro: boolean | any;

  constructor(private loginService: LoginService,
              private router: Router,
              private configuracionServicio: ConfiguracionService) { }

  ngOnInit(): void {
    this.loginService.getAuth().subscribe(auth => {
      if(auth){
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });

    this.configuracionServicio.getConfiguracion().subscribe(configuracion => {
      this.permitirRegistro = configuracion.permitirRegistro;
    })
  }
  logOut(){
    this.loginService.logOut();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
