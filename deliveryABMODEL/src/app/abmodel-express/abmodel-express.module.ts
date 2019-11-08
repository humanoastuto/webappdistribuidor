import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AbmodelExpressPage } from './abmodel-express.page';

const routes: Routes = [
  {
    path: '',
    component: AbmodelExpressPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AbmodelExpressPage]
})
export class AbmodelExpressPageModule {}
