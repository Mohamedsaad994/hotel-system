import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { AddeditroomsComponent } from './components/addeditrooms/addeditrooms.component';
import { SharedModule } from 'src/app/Modules/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RoomsComponent,
    AddeditroomsComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class RoomsModule { }
