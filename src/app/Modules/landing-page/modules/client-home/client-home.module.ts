import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientHomeRoutingModule } from './client-home-routing.module';
import { ClientHomeComponent } from './client-home.component';
import { TranslateModule } from '@ngx-translate/core';
import { MostAdsComponent } from './components/most-ads/most-ads.component';


@NgModule({
  declarations: [
    ClientHomeComponent,
    MostAdsComponent
  ],
  imports: [
    CommonModule,
    ClientHomeRoutingModule,
    TranslateModule
  ]
})
export class ClientHomeModule { }
