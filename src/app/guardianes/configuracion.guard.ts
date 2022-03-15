import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ConfiguracionService } from '../services/configuracion/configuracion.service';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionGuard implements CanActivate {
  constructor(
    private router: Router,
    private configuracionServicio: ConfiguracionService
  ){}
   
  canActivate(): Observable<boolean> {
    return this.configuracionServicio.getConfiguracion().pipe(
      map(configuracion => {
        if(configuracion.permitirRegistro){
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }   
}
