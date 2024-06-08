import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { ExploreComponent } from './components/explore/explore.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, children:[
    {path: '', redirectTo: 'clientHome', pathMatch: 'full'},
    {path: 'explore', component: ExploreComponent},
    { path: 'clientHome', loadChildren: () => import('./modules/client-home/client-home.module').then(m => m.ClientHomeModule) }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
