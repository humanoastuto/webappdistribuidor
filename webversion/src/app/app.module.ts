import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UbicacionClienteComponent } from './ubicacion-cliente/ubicacion-cliente.component';
import { UbicacionVendedorComponent } from './ubicacion-vendedor/ubicacion-vendedor.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  declarations: [AppComponent, UbicacionClienteComponent, UbicacionVendedorComponent, ListaProductosComponent, DetalleComponent],
  imports: [BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCGpohYz9t6hsj10jqD-4S5T0ohPpuVfSQ'
    }),
    NoopAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
