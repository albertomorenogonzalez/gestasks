import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestpeoplePage } from './gestpeople.page';

const routes: Routes = [
  {
    path: '',
    component: GestpeoplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestpeoplePageRoutingModule {}
