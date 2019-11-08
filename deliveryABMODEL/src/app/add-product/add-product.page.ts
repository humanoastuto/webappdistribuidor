import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})

@Injectable({
    providedIn: 'root'
})

export class AddProductPage implements OnInit {

    productos: any;
    prov: string;
    prod: string;
    desc: string;

    constructor(private firestore: AngularFirestore) {}

    ngOnInit() {
        this.read_Products().subscribe(data => {

            this.productos = data.map(e => {
                return {
                    id: e.payload.doc.id,
                    isEdit: false,
                    Proveedor: e.payload.doc.data()['Proveedor'],
                    Producto: e.payload.doc.data()['Producto'],
                    Descripcion: e.payload.doc.data()['Descripcion']
                };
            })
            console.log(this.productos);

        });
    }

    read_Products() {

        return this.firestore.collection('Productos').snapshotChanges();
    }

}
