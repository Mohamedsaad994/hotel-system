import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutReviewsComponent } from './out-reviews.component';

const routes: Routes = [{ path: '', component: OutReviewsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutReviewsRoutingModule { }
