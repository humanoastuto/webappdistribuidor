import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaComponent } from './mapa/mapa.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { ProductoComponent } from './producto/producto.component';



const routes: Routes = [
  { path: '',
    redirectTo: '/mapa',
    pathMatch: 'full'
  },
  { path: 'mapa', component: MapaComponent },
  { path: 'proveedor', component: ProveedorComponent },
  { path: 'vendedor', component: VendedorComponent },
  { path: 'producto', component: ProductoComponent }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
