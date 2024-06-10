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
import { FavouritesService } from './service/favourites.service';
import { BackyardComponent } from './components/backyard/backyard.component';
import { LivingComponent } from './components/living/living.component';



@NgModule({
  declarations: [
    ClientHomeComponent,
    MostAdsComponent,
    RoomAdsComponent,
    ReviewsComponent,
    BackyardComponent,
    LivingComponent
  ],
  imports: [
    CommonModule,
    ClientHomeRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    CarouselModule,
    FormsModule
  ],
  providers:[
    ClientHomeService,
    FavouritesService
  ]
})
export class ClientHomeModule { }
