import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaTransaccionesPage } from './lista-transacciones.page';

const routes: Routes = [
  {
    path: '',
    component: ListaTransaccionesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaTransaccionesPage]
})
export class ListaTransaccionesPageModule {}
