import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientHomeRoutingModule } from './client-home-routing.module';
import { ClientHomeComponent } from './client-home.component';
import { TranslateModule } from '@ngx-translate/core';
import { MostAdsComponent } from './components/most-ads/most-ads.component';
import { RoomAdsComponent } from './components/room-ads/room-ads.component';
import { ClientHomeService } from './service/clientHome.service';


@NgModule({
  declarations: [
    ClientHomeComponent,
    MostAdsComponent,
    RoomAdsComponent
  ],
  imports: [
    CommonModule,
    ClientHomeRoutingModule,
    TranslateModule,
  ],
  providers:[
    ClientHomeService
  ]
})
export class ClientHomeModule { }
