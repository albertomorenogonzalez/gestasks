import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsigntasksPageRoutingModule } from './asigntasks-routing.module';

import { AsigntasksPage } from './asigntasks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsigntasksPageRoutingModule
  ],
  declarations: [AsigntasksPage]
})
export class AsigntasksPageModule {}
