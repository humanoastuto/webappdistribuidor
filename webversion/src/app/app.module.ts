import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule} from '@angular/router';
import { MapaComponent } from './mapa/mapa.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { ProductoComponent } from './producto/producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [AppComponent, MapaComponent, ProveedorComponent, VendedorComponent, ProductoComponent],
  imports: [BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCGpohYz9t6hsj10jqD-4S5T0ohPpuVfSQ'
    }),],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
