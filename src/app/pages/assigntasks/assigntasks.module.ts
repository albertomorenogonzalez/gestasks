import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssigntasksPageRoutingModule } from './assigntasks-routing.module';

import { AssigntasksPage } from './assigntasks.page';
import { AssignmentComponent } from 'src/app/assignment/assignment.component';
import { AssignmentFormComponent } from 'src/app/assignmentform/assignmentform.component';
import { PersonSelectableComponent } from 'src/app/personselectable/personselectable.component';
import { TaskSelectableComponent } from 'src/app/taskselectable/taskselectable.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AssigntasksPageRoutingModule //Si pongo PersonSelectableComponent/TaskSelectableComponent aqui no funciona
  ],
  declarations: [AssigntasksPage, AssignmentComponent, AssignmentFormComponent, PersonSelectableComponent, TaskSelectableComponent]
})
export class AssigntasksPageModule {}
