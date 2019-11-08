import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    email: string = "";
    password: string = "";

    constructor(public afAuth: AngularFireAuth, private router: Router, private alertCtrl: AlertController) { }

    ngOnInit() {
    }

    async login() {
        const { email, password } = this
        try {
            const res = await this.afAuth.auth.signInWithEmailAndPassword(email , password)
            console.log("Youre logged now")
            this.router.navigate(['/estado'])
        }
        catch (err) {
            console.dir(err)
            if (err.code === "auth/user-not-found") {
                this.presentAlertLogin();
            }
            else if (err.code === "auth/invalid-email") {
                this.presentAlertUser();
            }
            else if (err.code === "auth/wrong-password") {
                this.presentAlertPassword();
            }
        }
    }

    async presentAlertLogin() {
        const alert = await this.alertCtrl.create({
            header: 'Aviso',
            message: 'La cotraseña es incorrecta o el usuario no tiene una.',
            buttons: ['OK']
        });
        (await alert).present();
        let result = await alert.onDidDismiss();
        console.log(result);
    }

    async presentAlertUser() {
        const alert = await this.alertCtrl.create({
            header: 'Aviso',
            message: 'Este no es un email valido.',
            buttons: ['OK']
        });
        (await alert).present();
        let result = await alert.onDidDismiss();
        console.log(result);
    }

    async presentAlertPassword() {
        const alert = await this.alertCtrl.create({
            header: 'Aviso',
            message: 'La contraseña es incorrecta.',
            buttons: ['OK']
        });
        (await alert).present();
        let result = await alert.onDidDismiss();
        console.log(result);
    }
    
}
