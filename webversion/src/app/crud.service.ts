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

  create_NewProveedor(record) {
    return this.firestore.collection('Proveedores').add(record);
  }
 
  read_Proveedores() {
    return this.firestore.collection('Proveedores').snapshotChanges();
  }
 
  update_Proveedor(recordID,record){
    this.firestore.doc('Proveedores/' + recordID).update(record);
  }
 
  delete_Proveedor(record_id) {
    this.firestore.doc('Proveedores/' + record_id).delete();
  }
  create_NewVendedor(record) {
    return this.firestore.collection('Vendedores').add(record);
  }
  read_Vendedor() {
    return this.firestore.collection('Vendedores').snapshotChanges();
  }
  update_Vendedor(recordID,record){
    this.firestore.doc('Vendedores/' + recordID).update(record);
  }
 
  delete_Vendedor(record_id) {
    this.firestore.doc('Vendedores/' + record_id).delete();
  }
  read_Ventas() {
    return this.firestore.collection('Ventas').snapshotChanges();
  }
  read_Pedidos() {
    return this.firestore.collection('Pedidos').snapshotChanges();
  }
}