import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestpeoplePageRoutingModule } from './gestpeople-routing.module';

import { GestpeoplePage } from './gestpeople.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestpeoplePageRoutingModule
  ],
  declarations: [GestpeoplePage]
})
export class GestpeoplePageModule {}
