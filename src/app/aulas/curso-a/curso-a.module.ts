import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoAPageRoutingModule } from './curso-a-routing.module';

import { CursoAPage } from './curso-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoAPageRoutingModule
  ],
  declarations: [CursoAPage]
})
export class CursoAPageModule {}
