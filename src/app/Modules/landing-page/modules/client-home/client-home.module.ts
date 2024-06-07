import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientHomeRoutingModule } from './client-home-routing.module';
import { ClientHomeComponent } from './client-home.component';


@NgModule({
  declarations: [
    ClientHomeComponent
  ],
  imports: [
    CommonModule,
    ClientHomeRoutingModule
  ]
})
export class ClientHomeModule { }
