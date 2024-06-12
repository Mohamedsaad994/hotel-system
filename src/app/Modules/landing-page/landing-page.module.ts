import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { NavUnautorizedComponent } from './components/nav-unautorized/nav-unautorized.component';
import { NavAuthorizedComponent } from './components/nav-authorized/nav-authorized.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthModule } from '../auth/auth.module';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';

import { ROUTES, RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DetailsComponent } from './components/details/details.component';
import { DetailsService } from './components/details/services/details.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientHomeService } from './modules/client-home/service/clientHome.service';

@NgModule({
  declarations: [
    LandingPageComponent,
    NavUnautorizedComponent,
    NavAuthorizedComponent,
    FooterComponent,
    DetailsComponent,

  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    HttpClientModule,
    AuthModule,
    SharedModule,
    CarouselModule,

    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ReactiveFormsModule
  ],
  providers: [
    TranslateService,
    DetailsService,
    ClientHomeService
  ],


})
export class LandingPageModule {}
