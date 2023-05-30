import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddEventComponent } from './add-event/add-event.component';
import { DetailComponent } from './detail/detail.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddEventComponent,
    DetailComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AddEventComponent
  ]
})
export class AdminModule { }
