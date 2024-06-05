import { Component } from '@angular/core';
import { IAllBooking, IBooking, IBookingData } from './models/booking';
import { BookingService } from './services/booking.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  pageSize: number = 10;
  pageNumber: number = 1;
  room: string = '';
  price: string = '';
  user: string = '';


  constructor(private _BookingService:BookingService , private _HelperService:HelperService){}

  ngOnInit(): void {
    this.onGetAllBooking()
  }

  headers: string[] = ['roomNumber', 'totalPrice', 'startDate','endDate',  'userName', 'actions'];
  displayHeaders: { [key: string]: string } = {
    roomNumber: 'Room number',
    totalPrice: 'Price',
    startDate: 'Start Date',
    endDate: 'End Date',
    userName: 'User',
    actions: 'Actions',
  };
  allBooking!: IAllBooking;
  BookingData: any[]=[];
  bookingList: IBooking[]=[];
  sortedData: IBooking[]=[];
  searchValue!: string;
  pageIndex = 0;
  totalCount!: number;
  tableResponse: IBookingData|undefined;
 
  onGetAllBooking(){
    const params = {
      // roomNumber: ,
      // user: ,
      // price: ,
      page: this.pageSize,
      size: this.pageNumber,
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
       
      },
      error: (err: HttpErrorResponse) => this._HelperService.error(err),
      complete: () => this._HelperService.success('Booking have been Retrieved Successfully'),
    });

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


handleViewItem(id:string){
  console.log(id);
}
handleEditItem(id:string){
  console.log(id);
}
handleDeleteItem(id:string){
  console.log(id);
}
}
