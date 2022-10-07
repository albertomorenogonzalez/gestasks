import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GesttasksPage } from './gesttasks.page';

const routes: Routes = [
  {
    path: '',
    component: GesttasksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GesttasksPageRoutingModule {}
