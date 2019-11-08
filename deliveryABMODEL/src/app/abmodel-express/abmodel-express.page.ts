import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { MediadorService } from '../mediador.service';


@Component({
  selector: 'app-abmodel-express',
  templateUrl: './abmodel-express.page.html',
  styleUrls: ['./abmodel-express.page.scss'],
})
export class AbmodelExpressPage implements OnInit {

    ventas: any;
    lat: string;
    lng: string;
    usr: string;
    atn: boolean;

    id: string;
    latitud: number;
    longitud: number;
    Usuario: string;

    constructor(private router: Router,
                private alertCtrl: AlertController,
                private firestore: AngularFirestore,
                private mediadorService: MediadorService) {
    }

    ngOnInit() {

        this.presentAlertNothingToShow();

        this.read_Ventas().subscribe(data => {
            this.ventas = data.map(e => {
                return {
                    id: e.payload.doc.id,
                    isEdit: false,
                    Atendido: e.payload.doc.data()['Atendido'],
                    Celular: e.payload.doc.data()['Celular'],
                    Fecha: e.payload.doc.data()['Fecha'],
                    Latitud: e.payload.doc.data()['Latitud'],
                    Longitud: e.payload.doc.data()['Longitud'],
                    Nombre: e.payload.doc.data()['Nombre'],
                };
            })
        });
    }

    goEstado() {
        this.router.navigate(['/estado'])
    }

    read_Ventas() {
        return this.firestore.collection('Pedidos').snapshotChanges();
    }

    next(recordRow) {
        let record = {};
        record['Atendido'] = true;
        this.update_Estado(recordRow.id, record);
        recordRow.isEdit = false;
        this.id = recordRow.id
        this.mediadorService.setId(this.id);
        console.log(this.id);
        this.latitud = parseFloat(recordRow.Latitud);
        this.mediadorService.setLatitud(this.latitud);
        console.log(this.latitud);
        this.longitud = parseFloat(recordRow.Longitud);
        this.mediadorService.setLongitud(this.longitud);
        console.log(this.longitud);
        this.Usuario = recordRow.Nombre;
        this.mediadorService.setUsuario(this.Usuario);
        this.router.navigate(['/mapa'])
    }

    update_Estado(recordID, record) {
        this.firestore.doc('Pedidos/' + recordID).update(record);
    }

    async presentAlertNothingToShow() {
        const alert = await this.alertCtrl.create({
            header: 'Aviso',
            message:    'Si no aparecen pedidos es debido ' +
                        'a que por el momento no tenemos ' + 
                        'pedidos disponibles.',
            buttons: ['OK']
        });
        (await alert).present();
        let result = await alert.onDidDismiss();
        console.log(result);
    }

}