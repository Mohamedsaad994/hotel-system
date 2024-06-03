import { SharedModule } from 'src/app/Modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule } from './ads-routing.module';
import { AdsComponent } from './ads.component';
import { HttpClientModule } from '@angular/common/http';
import { AdsService } from './services/ads.service';
import { AddeditadsComponent } from './components/addeditads/addeditads.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RoomsModule } from '../rooms/rooms.module';


@NgModule({
  declarations: [
    AdsComponent,
    AddeditadsComponent
  ],
  imports: [
    CommonModule,
    AdsRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    RoomsModule
  ],
  providers:[
    AdsService
  ]
})
export class AdsModule { }
