import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { IConfiguracion } from 'src/app/models/IConfiguracion.models';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  configuracionDoc: AngularFirestoreDocument<IConfiguracion>;
  configuracion: Observable<IConfiguracion> ;

  //id único de la colección de configuración
  id = '1';

  constructor(private db: AngularFirestore) { }

  getConfiguracion(): Observable<IConfiguracion> {
    this.configuracionDoc = this.db.doc<IConfiguracion>(`configuracion/${this.id}`);
    this.configuracion = this.configuracionDoc.valueChanges() as Observable<IConfiguracion>;
    return this.configuracion;
  }

  modificarConfiguracion(configuracion: IConfiguracion){
    this.configuracionDoc = this.db.doc<IConfiguracion>(`configuracion/${this.id}`);
    this.configuracionDoc.update(configuracion);
  }
}
