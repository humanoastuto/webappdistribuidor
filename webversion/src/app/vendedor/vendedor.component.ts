import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthenticationService } from "../authentication.service";
import { CrudService } from '../crud.service';

import { auth } from 'firebase/app';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {
  title = 'Plantilla de vendedores';

  vendedores: any;
  email:string = ''
  passrd:string = ''
  cpassrd: string = ''
  newEmail: string = ''
  newPass: string = ''
  inicio: string = '0'

  constructor(private crudService: CrudService,public afAuth: AngularFireAuth,public authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.crudService.read_Vendedor().subscribe(data => {
      this.vendedores = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Email: e.payload.doc.data()['Email'],
          Password: e.payload.doc.data()['Password'],
          Latitud: e.payload.doc.data()['Latitud'],
          Longitud: e.payload.doc.data()['Longitud']
        };
      })
      console.log(this.vendedores);
    });   
  }

  resetForm() {
    this.email = '';
    this.passrd = '';
    this.cpassrd = '';
    this.newEmail = '';
    this.newPass = '';
  }

  CreateRecord() {
    let record = {};
    if(this.passrd == this.cpassrd && this.passrd!=="" && this.email!==""){
      record['Email'] = this.email;
      record['Password'] = this.passrd;
      record['Latitud'] = this.inicio;
      record['Longitud'] = this.inicio;
      this.crudService.create_NewVendedor(record).then(resp => {
        this.resetForm();
        console.log(resp);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  RemoveRecord(rowID) {
    this.crudService.delete_Vendedor(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditEmail = record.Email;
    record.EditPass = record.Password;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['Email'] = recordRow.EditEmail;
    record['Password'] = recordRow.EditPass;
    this.crudService.update_Vendedor(recordRow.id, record);
    recordRow.isEdit = false;
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

  async borrar(){
    
    if(!(this.passrd === this.cpassrd)){
      return console.error("Las contrasenas son diferentes");
    }
    try{
     const res = await this.afAuth.auth.signInWithEmailAndPassword(this.email,this.passrd);
     this.afAuth.auth.currentUser.delete();
     console.log("Borrado");
    } catch(error) {
       console.dir(error);
    }

 }

 async getUserByEmail(){
    
  if(!(this.passrd === this.cpassrd)){
    return console.error("Las contrasenas son diferentes");
  }

  try{
   const res = await this.afAuth.auth.signInWithEmailAndPassword(this.email,this.passrd);
   this.afAuth.auth.currentUser.delete();
   console.log("Borrado");
  } catch(error) {
     console.dir(error);
  }

}


}
