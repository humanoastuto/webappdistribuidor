import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-informacion-ayuda',
  templateUrl: './informacion-ayuda.page.html',
  styleUrls: ['./informacion-ayuda.page.scss'],
})
export class InformacionAyudaPage implements OnInit {

    constructor(private router: Router, private alertCtrl: AlertController) { }

    ngOnInit() {

    }

    login() {
        this.router.navigate(['/login'])
    }

    async presentAlertOS() {
        const alert = await this.alertCtrl.create({
            header: 'Aviso',
            subHeader: 'El Manual de Usuario se encuentra en esta direccion',
            message: 'https://drive.google.com/open?id=1VahdJUoMk36l53AXuYi6OKKdNDvhegsy',
            buttons: ['OK']
        });
        (await alert).present();
        let result = await alert.onDidDismiss();
        console.log(result);
    }
}
