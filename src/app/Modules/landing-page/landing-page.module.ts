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


@NgModule({
  declarations: [
    LandingPageComponent,
    NavUnautorizedComponent,
    NavAuthorizedComponent,
    ExploreComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    HttpClientModule,
    AuthModule
  ]
})
export class LandingPageModule { }
