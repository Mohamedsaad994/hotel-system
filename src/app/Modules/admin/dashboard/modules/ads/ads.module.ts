import { SharedModule } from 'src/app/Modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule } from './ads-routing.module';
import { AdsComponent } from './ads.component';
import { HttpClientModule } from '@angular/common/http';
import { AdsService } from './services/ads.service';


@NgModule({
  declarations: [
    AdsComponent
  ],
  imports: [
    CommonModule,
    AdsRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers:[
    AdsService
  ]
})
export class AdsModule { }
