import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { NavUnautorizedComponent } from './components/nav-unautorized/nav-unautorized.component';
import { NavAuthorizedComponent } from './components/nav-authorized/nav-authorized.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthModule } from '../auth/auth.module';
import { ExploreComponent } from './components/explore/explore.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';

@NgModule({
  declarations: [
    LandingPageComponent,
    NavUnautorizedComponent,
    NavAuthorizedComponent,
    ExploreComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    HttpClientModule,
    AuthModule,
    SharedModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [TranslateService],
})
export class LandingPageModule {}
