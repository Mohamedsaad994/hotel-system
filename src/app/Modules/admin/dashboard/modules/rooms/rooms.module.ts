import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { AddeditroomsComponent } from './components/addeditrooms/addeditrooms.component';
import { SharedModule } from 'src/app/Modules/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RoomsService } from './services/rooms.service';
import { HttpClientModule } from '@angular/common/http';
import { FacilitiesModule } from '../facilities/facilities.module';

@NgModule({
  declarations: [
    RoomsComponent,
    AddeditroomsComponent
  ],

  imports: [
    CommonModule,
    RoomsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    FacilitiesModule
  ],

  providers: [
    RoomsService
  ]
})
export class RoomsModule { }
