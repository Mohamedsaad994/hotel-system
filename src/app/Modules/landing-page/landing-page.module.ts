import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { NavUnautorizedComponent } from './components/nav-unautorized/nav-unautorized.component';
import { NavAuthorizedComponent } from './components/nav-authorized/nav-authorized.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    NavUnautorizedComponent,
    NavAuthorizedComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
