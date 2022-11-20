import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeetasksPageRoutingModule } from './seetasks-routing.module';

import { SeetasksPage } from './seetasks.page';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/utils/translate';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeetasksPageRoutingModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
      }
      })],
  declarations: [SeetasksPage]
})
export class SeetasksPageModule {}
