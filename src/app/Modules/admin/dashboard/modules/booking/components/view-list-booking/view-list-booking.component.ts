import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookingService } from '../../services/booking.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { IBooking } from '../../models/booking';


@Component({
  selector: 'app-view-list-booking',
  templateUrl: './view-list-booking.component.html',
  styleUrls: ['./view-list-booking.component.scss']
})
export class ViewListBookingComponent implements OnInit{
  constructor(private _BookingService:BookingService, private _HelperService:HelperService,
    public dialogRef: MatDialogRef<ViewListBookingComponent>,
   @Inject(MAT_DIALOG_DATA) public data:IBooking
  ) {}
  ngOnInit(): void {
   
  }



onNoClick(): void {
    this.dialogRef.close();
  }

}
