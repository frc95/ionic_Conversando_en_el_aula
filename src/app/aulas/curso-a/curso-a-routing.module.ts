import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoAPage } from './curso-a.page';

const routes: Routes = [
  {
    path: '',
    component: CursoAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoAPageRoutingModule {}
