import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestpeoplePageRoutingModule } from './gestpeople-routing.module';

import { GestpeoplePage } from './gestpeople.page';
import { PersonComponent } from 'src/app/person/person.component';
import { FormComponent } from 'src/app/form/form.component';
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
    GestpeoplePageRoutingModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
      }
      })],
  declarations: [GestpeoplePage, PersonComponent, FormComponent],
  providers: [
  {
    provide: LOCALE_ID,
    deps: [LocaleService],
    useClass: LocaleId
  }],
})
export class GestpeoplePageModule {}
