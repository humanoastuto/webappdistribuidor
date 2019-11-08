import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule} from '@angular/router';
import { UbicacionClienteComponent } from './ubicacion-cliente/ubicacion-cliente.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { DetalleComponent } from './detalle/detalle.component';
//import { NuevoproveedorComponent } from './nuevoproveedor/nuevoproveedor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import { AngularFireModule } from '@angular/fire';
import firebaseConfig from './firebase';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from "@angular/forms";
import {MatDividerModule} from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { CarritoComponent } from './carrito/carrito.component';

//import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent, UbicacionClienteComponent, ListaProductosComponent, DetalleComponent, CarritoComponent],
  imports: [BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MatDividerModule,
    AppRoutingModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatInputModule,
    AngularFireAuthModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCGpohYz9t6hsj10jqD-4S5T0ohPpuVfSQ'
    }),],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

