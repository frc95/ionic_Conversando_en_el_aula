import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoBPageRoutingModule } from './curso-b-routing.module';

import { CursoBPage } from './curso-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoBPageRoutingModule
  ],
  declarations: [CursoBPage]
})
export class CursoBPageModule {}
