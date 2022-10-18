import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GesttasksPageRoutingModule } from './gesttasks-routing.module';

import { GesttasksPage } from './gesttasks.page';
import { TaskComponent } from 'src/app/task/task.component';
import { TaskFormComponent } from 'src/app/taskform/taskform.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    GesttasksPageRoutingModule
  ],
  declarations: [GesttasksPage, TaskComponent, TaskFormComponent]
})
export class GesttasksPageModule {}
