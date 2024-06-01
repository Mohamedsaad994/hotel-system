import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilitiesRoutingModule } from './facilities-routing.module';
import { FacilitiesComponent } from './facilities.component';
import { SharedModule } from 'src/app/Modules/shared/shared.module';

import { FacilitiesService } from './services/facilities.service';
import { HttpClientModule } from '@angular/common/http';
import { AddEditFacilitiesComponent } from './components/add-edit-facilities/add-edit-facilities.component';

@NgModule({
  declarations: [
    FacilitiesComponent,
    AddEditFacilitiesComponent
  ],
  imports: [
    CommonModule,
    FacilitiesRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    FacilitiesService
  ]
})
export class FacilitiesModule { }
