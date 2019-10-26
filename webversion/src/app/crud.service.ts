import { Injectable } from '@angular/core';
 
import { AngularFirestore } from '@angular/fire/firestore';
 
@Injectable({
  providedIn: 'root'
})
export class CrudService {
 
  constructor(
    private firestore: AngularFirestore
  ) { }
 
 
  create_NewProducto(record) {
    return this.firestore.collection('Productos').add(record);
  }
 
  read_Productos() {
    return this.firestore.collection('Productos').snapshotChanges();
  }
 
  update_Producto(recordID,record){
    this.firestore.doc('Productos/' + recordID).update(record);
  }
 
  delete_Producto(record_id) {
    this.firestore.doc('Productos/' + record_id).delete();
  }
}