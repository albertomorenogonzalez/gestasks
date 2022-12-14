import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GesttasksPageRoutingModule } from './gesttasks-routing.module';

import { GesttasksPage } from './gesttasks.page';
import { TaskComponent } from 'src/app/task/task.component';
import { TaskFormComponent } from 'src/app/taskform/taskform.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/utils/translate';
import { LocaleId } from 'src/app/app.module';
import { LocaleService } from 'src/app/services/localeService';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    GesttasksPageRoutingModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
      }
      })],
  declarations: [GesttasksPage, TaskComponent, TaskFormComponent],
  providers: [
    {
      provide: LOCALE_ID,
      deps: [LocaleService],
      useClass: LocaleId
    }],
})
export class GesttasksPageModule {}
