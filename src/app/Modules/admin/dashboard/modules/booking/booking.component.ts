import { Component } from '@angular/core';
import { IAllBooking, IBooking } from './models/booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  headers: string[] = ['roomNumber', 'price', 'startAt', 'user', 'actions'];

  displayHeaders: { [key: string]: string } = {
    roomNumber: 'Room number',
    price: 'Price',
    startAt: 'Start at',
    user: 'User',
    actions: 'Actions',
  };

  allBooking!: IAllBooking;
  BookingData!: IBooking[];

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
