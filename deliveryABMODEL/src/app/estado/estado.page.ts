import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.page.html',
  styleUrls: ['./estado.page.scss'],
})
export class EstadoPage implements OnInit {

    constructor(private router: Router, private alertCtrl: AlertController) { }

    ngOnInit() {

    }
    goAbmodelExpress() {
        this.router.navigate(['/abmodel-express'])
    }

    async presentAlert() {
        const alert = await this.alertCtrl.create({
            header: 'Aviso',
            subHeader: 'El usuario no esta disponible',
            message: 'Sera redireccionado al loggin',
            buttons: ['OK']
        });
        (await alert).present();
        let result = await alert.onDidDismiss();
        console.log(result);
        this.router.navigate(['/login'])
    }

    informacion() {
        this.router.navigate(['/informacion-ayuda'])
    }

}
