import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientHomeRoutingModule } from './client-home-routing.module';
import { ClientHomeComponent } from './client-home.component';
import { TranslateModule } from '@ngx-translate/core';
import { MostAdsComponent } from './components/most-ads/most-ads.component';
import { RoomAdsComponent } from './components/room-ads/room-ads.component';
import { ClientHomeService } from './service/clientHome.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    ClientHomeComponent,
    MostAdsComponent,
    RoomAdsComponent,
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    ClientHomeRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    ClientHomeService
  ]
})
export class ClientHomeModule { }
