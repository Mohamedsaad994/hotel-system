import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutReviewsRoutingModule } from './out-reviews-routing.module';
import { OutReviewsComponent } from './out-reviews.component';


@NgModule({
  declarations: [
    OutReviewsComponent
  ],
  imports: [
    CommonModule,
    OutReviewsRoutingModule
  ]
})
export class OutReviewsModule { }
