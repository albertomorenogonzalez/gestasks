import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'gestpeople',
    loadChildren: () => import('./gestpeople/gestpeople.module').then( m => m.GestpeoplePageModule)
  },
  {
    path: 'gesttasks',
    loadChildren: () => import('./gesttasks/gesttasks.module').then( m => m.GesttasksPageModule)
  },
  {
    path: 'asigntasks',
    loadChildren: () => import('./asigntasks/asigntasks.module').then( m => m.AsigntasksPageModule)
  },
  {
    path: 'seetasks',
    loadChildren: () => import('./seetasks/seetasks.module').then( m => m.SeetasksPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
