import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeetasksPageRoutingModule } from './seetasks-routing.module';

import { SeetasksPage } from './seetasks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeetasksPageRoutingModule
  ],
  declarations: [SeetasksPage]
})
export class SeetasksPageModule {}
