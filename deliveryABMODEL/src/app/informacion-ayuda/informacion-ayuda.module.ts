import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InformacionAyudaPage } from './informacion-ayuda.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionAyudaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InformacionAyudaPage]
})
export class InformacionAyudaPageModule {}
