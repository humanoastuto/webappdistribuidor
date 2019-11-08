import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediadorService } from '../mediador.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})

export class ClientePage implements OnInit {

    idExt: string;
    items: any;
    cantidad: number;
    nombre: string;
    id: string;
    precio: string;

    constructor(private router: Router,
                private mediador: MediadorService,
                private firestore: AngularFirestore,) { }

    ngOnInit() {

        this.asignarValores();

        this.read_Items().subscribe(data => {
            this.items = data.map(e => {
                return {
                    id: e.payload.doc.id,
                    isEdit: false,
                    Cantidad: e.payload.doc.data()['cantidad'],
                    Nombre: e.payload.doc.data()['nombre'],
                    Id: e.payload.doc.data()['id'],
                    Precio: e.payload.doc.data()['precio']
                };
            })
        });

    }

    goToTransaccion() {
        this.router.navigate(['/transaccion'])
    }

    asignarValores() {
        this.idExt = this.mediador.getId();
    }

    read_Items() {
        return this.firestore.collection('Items').snapshotChanges();
    }

}
  