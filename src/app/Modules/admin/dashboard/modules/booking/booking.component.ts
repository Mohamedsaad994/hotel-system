import { Component, OnInit } from '@angular/core';
import { IAllBooking, IBooking, IBookingData } from './models/booking';
import { BookingService } from './services/booking.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { ViewListBookingComponent } from './components/view-list-booking/view-list-booking.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  pageSize: number = 10;
  pageNumber: number = 1;
  allBooking!: IAllBooking;
  BookingData: any[]=[];
  tableResponse: IBookingData|undefined;
 
 constructor(private _BookingService:BookingService , 
  private _HelperService:HelperService ,
  public dialog:MatDialog){}

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
  onGetAllBooking(){
    const params = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
    };
   this._BookingService.getAllBooking(params).subscribe({
      next: (res) => {
        this.tableResponse = res.data;
       this.BookingData = this.tableResponse?.booking.map(ad => ({
        _id:ad._id,
        roomNumber:ad.room.roomNumber,
        totalPrice:ad.totalPrice,
        startDate:ad.startDate,
        endDate:ad.endDate,
        userName:ad.user.userName,
       }) )
      },
      error: (err: HttpErrorResponse) => this._HelperService.error(err),
      complete: () => {},
    });

  }



  onGetBookingDetailsById(id:string , userData:any){
    this._BookingService.getBookingDetailsById(id).subscribe({
      next:(res)=>{
       console.log(res);
       
      },
    })
}


  openViewBookingDialog(id:string): void {
    const dialogRef = this.dialog.open(ViewListBookingComponent, {
      width: '550px',
      height: 'auto',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
     this.onGetBookingDetailsById(id ,result)
    });
  }

handleViewItem(id:string){
 this.openViewBookingDialog(id)
}








}

