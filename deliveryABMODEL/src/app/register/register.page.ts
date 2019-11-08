import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    email: string = "";
    password: string = "";
    cpassword: string = "";
    constructor(public afAuth: AngularFireAuth) { }

      ngOnInit() {
      }

    async register() {
        const { email, password, cpassword } = this
        if (password !== cpassword) {
            return console.error("Password dont match")
        }
        try {
            const res = await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            console.log(res)
            console.log("Youre register now")
        }
        catch (error) {
            console.dir(error)
        }
        
    }

}
