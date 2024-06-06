import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { AuthModule } from '../../auth/auth.module';
import { ViewCurrentUserComponent } from './components/view-current-user/view-current-user.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ViewCurrentUserComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    AuthModule
  ]
})
export class DashboardModule { }
