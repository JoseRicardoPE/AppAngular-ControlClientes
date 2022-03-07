import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { ICliente } from 'src/app/models/ICliente.models';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  clientesColeccion:AngularFirestoreCollection<ICliente>;
  clienteDoc: AngularFirestoreDocument<ICliente>;
  clientes: Observable<ICliente[]>;
  cliente: Observable<ICliente>;

  constructor(private db: AngularFirestore) {
    this.clientesColeccion = db.collection('clientes', referencia => referencia.orderBy('nombre', 'asc'));

  }

  getClientes():Observable<ICliente[]> {
    this.clientes = this.clientesColeccion.snapshotChanges().pipe(
      map(data => {
        return data.map( accion => {
          const datos = accion.payload.doc.data() as ICliente;
          datos.id = accion.payload.doc.id;
          return datos;
        })
      })
    );
    return this.clientes;
  }
}
