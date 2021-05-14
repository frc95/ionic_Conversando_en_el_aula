import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoBPage } from './curso-b.page';

const routes: Routes = [
  {
    path: '',
    component: CursoBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoBPageRoutingModule {}
