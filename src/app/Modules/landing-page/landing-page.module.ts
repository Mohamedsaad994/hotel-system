import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { NavUnautorizedComponent } from './components/nav-unautorized/nav-unautorized.component';
import { NavAuthorizedComponent } from './components/nav-authorized/nav-authorized.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '../auth/auth.module';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { ExploreComponent } from './components/explore/explore.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    NavUnautorizedComponent,
    NavAuthorizedComponent,
    HomeUserComponent,
    ExploreComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    HttpClientModule,
    AuthModule
  ]
})
export class LandingPageModule { }
