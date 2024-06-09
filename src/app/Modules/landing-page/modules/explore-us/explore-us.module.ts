import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreUsRoutingModule } from './explore-us-routing.module';
import { ExploreUsComponent } from './explore-us.component';


@NgModule({
  declarations: [
    ExploreUsComponent
  ],
  imports: [
    CommonModule,
    ExploreUsRoutingModule
  ]
})
export class ExploreUsModule { }
