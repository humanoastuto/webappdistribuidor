import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(
    public afAuth: AngularFireAuth // Inject Firebase auth service
  ) { 
  }

  // Sign up with email/password
  SignUp(email, password, cpass) {
    if(password === cpass)
    {
      return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert("You have been successfully registered!");
        console.log(result.user)
      }).catch((error) => {
        window.alert(error.message)
      })
    }
    else
    {
      window.alert("Contrasenas no iguales, introduzcalas de nuevo");
    }
  }

  async delete(email, password, cpass){
    
    if(!(password === cpass)){
      return console.error("Las contrasenas son diferentes");
    }

    try{
     const res = await this.afAuth.auth.signInWithEmailAndPassword(email,password);
     this.afAuth.auth.currentUser.delete();
     console.log("Borrado");
    } catch(error) {
       console.dir(error);
    }
 }

update(email, password, cpass,nuevoEmail,newPass){
    
  if(!(password === cpass)){
    return console.error("Las contrasenas son diferentes");
  }

  try{
   this.afAuth.auth.currentUser.updateEmail(nuevoEmail);
   this.afAuth.auth.currentUser.updatePassword(newPass);
   console.log("Borrado");
  } catch(error) {
     console.dir(error);
  }
 }
/*
  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
         this.router.navigate(['<!-- enter your route name here -->']);
      }).catch((error) => {
        window.alert(error.message)
      })
  }
*/
}