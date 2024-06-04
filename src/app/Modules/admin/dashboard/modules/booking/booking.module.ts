import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { SharedModule } from 'src/app/Modules/shared/shared.module';
import { BookingService } from './services/booking.service';
import { ViewListBookingComponent } from './components/view-list-booking/view-list-booking.component';


@NgModule({
  declarations: [
    BookingComponent,
    ViewListBookingComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    SharedModule
  ],
  providers: [
    BookingService
  ]
})
export class BookingModule { }
