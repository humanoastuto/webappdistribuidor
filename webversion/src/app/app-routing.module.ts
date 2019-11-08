import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UbicacionClienteComponent } from './ubicacion-cliente/ubicacion-cliente.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { DetalleComponent } from './detalle/detalle.component';
import { CarritoComponent } from './carrito/carrito.component';


const routes: Routes = [
  { path: '',
    redirectTo: '/ubicacion-cliente',
    pathMatch: 'full'
  },
  { path: 'ubicacion-cliente', component: UbicacionClienteComponent },
  { path: 'lista-productos', component: ListaProductosComponent },
  { path: 'detalle', component: DetalleComponent },
  { path: 'carrito', component: CarritoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
