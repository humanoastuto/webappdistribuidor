import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {

    constructor(private router: Router, private alertCtrl: AlertController) { }

  public Total: number = 0;
  public Pagado: number = 0;
    public Cambio: number = 0;
    public aux: number = 0;

  ngOnInit() {
  }

  CambioClick(){
    if (this.Total < this.Pagado){
      this.Cambio = this.Pagado - this.Total;
    }
    if (this.Total > this.Pagado){
        this.presentAlertPago()
    }
    /*alert(this.Cambio);*/
  }

  goToEstado(){
    this.router.navigate(['/estado'])
    }

    async presentAlertPago() {
        this.aux = this.Total - this.Pagado 
        const alert = await this.alertCtrl.create({
            header: 'Advice',
            subHeader: 'Se debe Cubrir el Pago Total',
            message: 'Faltan:' + this.aux,
            buttons: ['OK']
        });
        (await alert).present();
        let result = await alert.onDidDismiss();
        console.log(result);
    }

}
