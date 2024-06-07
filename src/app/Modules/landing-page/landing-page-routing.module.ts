import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { ExploreComponent } from './components/explore/explore.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, children:[
    {path: '', redirectTo: 'user-home', pathMatch: 'full'},
    {path: 'user-home', component: HomeUserComponent},
    {path: 'explore', component: ExploreComponent},
  ]},
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'clientHome', loadChildren: () => import('./modules/client-home/client-home.module').then(m => m.ClientHomeModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
