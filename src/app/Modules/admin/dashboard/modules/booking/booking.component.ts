// booking.component.ts
import { Component, OnInit } from '@angular/core';
import {
  IAllBooking,
  IBooking,
  IBookingData,
  IBookingParams,
} from './models/booking';
import { BookingService } from './services/booking.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { ViewListBookingComponent } from './components/view-list-booking/view-list-booking.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  pageSize: number = 10;
  pageNumber: number = 1;

  room: string = '';
  price: string = '';
  user: string = '';

  allBooking: IAllBooking = {
    data: {
      booking: [],
      totalCount: 0,
    },
    success: false,
    message: '',
  };
  BookingData: any[] = [];
  tableResponse!: IBookingData;


  constructor(
    private _BookingService: BookingService,
    private _HelperService: HelperService,
    public dialog: MatDialog
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


  bookingList: IBooking[]=[];
  sortedData: IBooking[]=[];
  searchValue!: string;
  pageIndex = 0;
  totalCount!: number;


  // onGetAllBooking(){
  //   const params = {
  //     // roomNumber: ,
  //     // user: ,
  //     // price: ,
  //     page: this.pageSize,
  //     size: this.pageNumber,
  //   };


  onGetAllBooking() {
    const params: IBookingParams = {
      size: this.pageSize,
      page: this.pageNumber,
    };
    this._BookingService.getAllBooking(params).subscribe({
      next: (res) => {
        this.tableResponse = res.data;
        // this.bookingListCount = res.data.totalCount;
        this.bookingList = res.data.booking;
        console.log(this.bookingList);
       this.sortedData = this.bookingList.slice();
               console.log(this.bookingList);
       this.totalCount = res.data.totalCount;
       this.BookingData = this.tableResponse?.booking.map(ad => ({
        _id:ad._id,
        roomNumber:ad.room.roomNumber,
        totalPrice:ad.totalPrice,
        startDate:ad.startDate,
        endDate:ad.endDate,
        userName:ad.user.userName,
       })
      )
        this.allBooking.data = res.data;
        this.allBooking.success = res.success;
        this.allBooking.message = res.message;

      },
      error: (err: HttpErrorResponse) => this._HelperService.error(err),
      complete: () =>
        this._HelperService.success('Booking have been Retrieved Successfully'),
    });
  }

  handleEditItem(id: string) {
    console.log(id);
  }


  resetSearchInput() {
    this.searchValue = '';
    this.onGetAllBooking();
  }

  // filterByRoomNumber(searchValue: HTMLInputElement) {
  //   if (searchValue) {
  //     this.sortedData = this.sortedData.filter((param) =>
  //       param.room.roomNumber.includes(searchValue.value)

  //     );
  //     console.log(this.sortedData)

  //     this.totalCount = this.sortedData.length;
  //   }
  // }


  filterByRoomNumber(searchVal: HTMLInputElement) {
    if (searchVal) {
      this.bookingList = this.bookingList.filter((param) => param.room.roomNumber.includes(searchVal.value));
      console.log(this.bookingList);
      this.totalCount = this.bookingList.length
    }
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

  onGetBookingDetailsById(id: string) {
    this._BookingService.getBookingDetailsById(id).subscribe({
      next: (res) => {
        console.log(res);
      },
    });

  }

  openViewBookingDialog(id: string): void {
    this._BookingService.getBookingDetailsById(id).subscribe({
      next: (res: any) => {
        console.log(res.data.booking);
        const dialogRef = this.dialog.open(ViewListBookingComponent, {
          width: '550px',
          height: 'auto',
          data: {bookData: res},
        });
        dialogRef.afterClosed().subscribe((result) => {});
      },
    });
  }

  handleViewItem(id: string) {
    this.openViewBookingDialog(id);
  }
}

