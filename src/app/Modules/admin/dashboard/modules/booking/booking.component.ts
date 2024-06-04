import { Component } from '@angular/core';
import { IAllBooking, IBooking, IBookingData } from './models/booking';
import { BookingService } from './services/booking.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent {
  pageSize: number = 0;
  pageNumber: number = 0;
  constructor(
    private _BookingService: BookingService,
    private _HelperService: HelperService
  ) {}

  ngOnInit(): void {
    this.onGetAllBooking();
  }

  headers: string[] = [
    'roomNumber',
    'totalPrice',
    'startDate',
    'endDate',
    'userName',
    'actions',
  ];
  displayHeaders: { [key: string]: string } = {
    roomNumber: 'Room number',
    totalPrice: 'Price',
    startDate: 'Start Date',
    endDate: 'End Date',
    userName: 'User',
    actions: 'Actions',
  };
  allBooking!: IAllBooking;
  BookingData: any[] = [];
  tableResponse!: IBookingData;

  onGetAllBooking() {
    const params = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
    };

    this._BookingService.getAllBooking(params).subscribe({
      next: (res) => {
        this.tableResponse = res.data;
        this.BookingData = this.tableResponse?.booking.map((ad) => ({
          _id: ad._id,
          roomNumber: ad.room.roomNumber,
          totalPrice: ad.totalPrice,
          startDate: ad.startDate,
          endDate: ad.endDate,
          userName: ad.user.userName,
        }));
      },
      error: (err: HttpErrorResponse) => this._HelperService.error(err),
      complete: () =>
        this._HelperService.success('Booking have been Retrieved Successfully'),
    });
  }

  handleViewItem(id: string) {
    console.log(id);
  }
  handleEditItem(id: string) {
    console.log(id);
  }
  handleDeleteItem(id: string) {
    console.log(id);
  }

  pageNumberEvent(event: number) {
    this.pageNumber = event;
    this.onGetAllBooking();
  }

  pageSizeEvent(event: number) {
    this.pageSize = event;
    this.onGetAllBooking();
  }
}
