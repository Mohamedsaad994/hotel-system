import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreUsRoutingModule } from './explore-us-routing.module';
import { ExploreUsComponent } from './explore-us.component';
import { ExploreService } from './servieces/explore.service';
import { SharedModule } from 'src/app/Modules/shared/shared.module';



@NgModule({
  declarations: [
    ExploreUsComponent
  ],
  imports: [
    CommonModule,
    ExploreUsRoutingModule,
    SharedModule
  ],
  providers: [
    ExploreService
  ]
})
export class ExploreUsModule { }
