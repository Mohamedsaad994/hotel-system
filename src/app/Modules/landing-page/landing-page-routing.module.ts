import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { ExploreComponent } from './components/explore/explore.component';
import { DetailsComponent } from './components/details/details.component';
import { FavoriteComponent } from './modules/favorite/favorite.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent, children:[
    {path: '', redirectTo: 'clientHome', pathMatch: 'full'},
    {path: 'details/:id', component: DetailsComponent},
    { path: 'clientHome', loadChildren: () => import('./modules/client-home/client-home.module').then(m => m.ClientHomeModule) },
    { path: 'explore-us', loadChildren: () => import('./modules/explore-us/explore-us.module').then(m => m.ExploreUsModule) },
    { path: 'favorite', loadChildren: () => import('./modules/favorite/favorite.module').then(m => m.FavoriteModule) },
    { path: 'our-reviews', loadChildren: () => import('./modules/out-reviews/out-reviews.module').then(m => m.OutReviewsModule) },
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
