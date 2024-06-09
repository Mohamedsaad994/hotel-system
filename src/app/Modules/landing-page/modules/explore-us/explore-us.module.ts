import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreUsRoutingModule } from './explore-us-routing.module';
import { ExploreUsComponent } from './explore-us.component';
import { ExploreService } from './servieces/explore.service';


@NgModule({
  declarations: [
    ExploreUsComponent
  ],
  imports: [
    CommonModule,
    ExploreUsRoutingModule
  ],
  providers: [
    ExploreService
  ]
})
export class ExploreUsModule { }
