import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GesttasksPageRoutingModule } from './gesttasks-routing.module';

import { GesttasksPage } from './gesttasks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GesttasksPageRoutingModule
  ],
  declarations: [GesttasksPage]
})
export class GesttasksPageModule {}
