import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { NavUnautorizedComponent } from './components/nav-unautorized/nav-unautorized.component';
import { NavAuthorizedComponent } from './components/nav-authorized/nav-authorized.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '../auth/auth.module';
import { ExploreComponent } from './components/explore/explore.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { ROUTES, RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeUserComponent } from './components/home-user/home-user.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    NavUnautorizedComponent,
    NavAuthorizedComponent,
    ExploreComponent,
    FooterComponent,
    HomeUserComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    HttpClientModule,
    AuthModule,
    CarouselModule,
    
  ]
})
export class LandingPageModule { }
