import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestpeoplePageRoutingModule } from './gestpeople-routing.module';

import { GestpeoplePage } from './gestpeople.page';
import { PersonComponent } from 'src/app/person/person.component';
import { FormComponent } from 'src/app/form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    GestpeoplePageRoutingModule
  ],
  declarations: [GestpeoplePage, PersonComponent, FormComponent]
})
export class GestpeoplePageModule {}
