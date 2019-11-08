import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'estado', loadChildren: './estado/estado.module#EstadoPageModule' },
  { path: 'mapa', loadChildren: './mapa/mapa.module#MapaPageModule' },
  { path: 'abmodel-express', loadChildren: './abmodel-express/abmodel-express.module#AbmodelExpressPageModule' },
  { path: 'informacion-ayuda', loadChildren: './informacion-ayuda/informacion-ayuda.module#InformacionAyudaPageModule' },
  { path: 'cliente', loadChildren: './cliente/cliente.module#ClientePageModule' },
  { path: 'lista-transacciones', loadChildren: './lista-transacciones/lista-transacciones.module#ListaTransaccionesPageModule' },
  { path: 'transaccion', loadChildren: './transaccion/transaccion.module#TransaccionPageModule' },  { path: 'pago', loadChildren: './pago/pago.module#PagoPageModule' },
  { path: 'add-product', loadChildren: './add-product/add-product.module#AddProductPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
