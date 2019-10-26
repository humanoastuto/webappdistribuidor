import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthenticationService } from "../authentication.service";

import { auth } from 'firebase/app';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {

  email:string = ''
  passrd:string = ''
  cpassrd: string = ''

  constructor(public afAuth: AngularFireAuth,public authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  resetForm() {
    this.email = '';
    this.passrd = '';
    this.cpassrd = '';
  }

  async registrar(){
    
     if(!(this.passrd === this.cpassrd)){
       return console.error("Las contrasenas son diferentes");
     }

     try{
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(this.email,this.passrd);
      console.log(res);
     } catch(error) {
        console.dir(error);
     }
 
   }

}
