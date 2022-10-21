import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'gestpeople',
    loadChildren: () => import('./pages/gestpeople/gestpeople.module').then( m => m.GestpeoplePageModule)
  },
  {
    path: 'gesttasks',
    loadChildren: () => import('./pages/gesttasks/gesttasks.module').then( m => m.GesttasksPageModule)
  },
  {
    path: 'assigntasks',
    loadChildren: () => import('./pages/assigntasks/assigntasks.module').then( m => m.AssigntasksPageModule)
  },
  {
    path: 'seetasks',
    loadChildren: () => import('./pages/seetasks/seetasks.module').then( m => m.SeetasksPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
