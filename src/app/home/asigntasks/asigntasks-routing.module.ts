import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsigntasksPage } from './asigntasks.page';

const routes: Routes = [
  {
    path: '',
    component: AsigntasksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsigntasksPageRoutingModule {}
