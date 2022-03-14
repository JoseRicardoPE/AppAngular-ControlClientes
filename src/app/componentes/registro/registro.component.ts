import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email: string;
  password: string;

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginService.getAuth().subscribe(auth => {
      if (auth){
        this.router.navigate(['/']);
      }
    })
  }
  registro(){
    this.loginService.registrarse(this.email, this.password)
      .then(respuesta => {
        this.router.navigate(['/']);
      })
      .catch(error => {
        Swal.fire({
          icon: 'info',
          text: '¡Debe ingresar un email y un password para quedar registrado!'
        });
      })
  } 
}
