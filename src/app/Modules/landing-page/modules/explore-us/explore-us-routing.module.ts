import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreUsComponent } from './explore-us.component';

const routes: Routes = [{ path: '', component: ExploreUsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreUsRoutingModule { }
