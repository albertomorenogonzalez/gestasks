import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeetasksPage } from './seetasks.page';

const routes: Routes = [
  {
    path: '',
    component: SeetasksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeetasksPageRoutingModule {}
