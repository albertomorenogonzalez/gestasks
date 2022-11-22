import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssigntasksPageRoutingModule } from './assigntasks-routing.module';

import { AssigntasksPage } from './assigntasks.page';
import { AssignmentComponent } from 'src/app/assignment/assignment.component';
import { AssignmentFormComponent } from 'src/app/assignmentform/assignmentform.component';
import { PersonSelectableComponent } from 'src/app/personselectable/personselectable.component';
import { TaskSelectableComponent } from 'src/app/taskselectable/taskselectable.component';
import { DateTimeSelectableComponent } from 'src/app/datetimeselectable/datetimeselectable.component';
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
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
      }
      }),
    AssigntasksPageRoutingModule //Si pongo PersonSelectableComponent/TaskSelectableComponent aqui no funciona
  ],
  declarations: [AssigntasksPage, AssignmentComponent, AssignmentFormComponent, PersonSelectableComponent, TaskSelectableComponent, DateTimeSelectableComponent],
  providers: [
  {
    provide: LOCALE_ID,
    deps: [LocaleService],
    useClass: LocaleId
  }],
})
export class AssigntasksPageModule {}
