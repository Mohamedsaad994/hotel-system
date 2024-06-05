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
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ViewComponent } from './components/view/view.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    RoomsComponent,
    AddeditroomsComponent,
    ViewComponent,

  ],

  imports: [
    CommonModule,
    RoomsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    FacilitiesModule,
    NgxDropzoneModule,
    CarouselModule
  ],

  providers: [
    RoomsService
  ]
})
export class RoomsModule { }
