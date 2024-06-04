import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAllBooking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

constructor(private _HttpClient:HttpClient) { }

getAllBooking(data:any):Observable<IAllBooking>{
  return this._HttpClient.get<IAllBooking>('admin/booking' , {params:data})
}

}
