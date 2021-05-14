import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage : AngularFirestore) {}

  GuardarMensaje(mensaje : string, nombre : string, curso: string){
    let time = Date.now();
    this.storage.collection('mensajes').add({
      createdAT : time,
      msg : mensaje,
      user : nombre,
      curso : curso
    });
  }

  ObtenerMensajes(curso : string){
    return this.storage.collection('mensajes', ref => ref.orderBy('createdAT').where('curso','==',curso)).valueChanges();
  }
}
