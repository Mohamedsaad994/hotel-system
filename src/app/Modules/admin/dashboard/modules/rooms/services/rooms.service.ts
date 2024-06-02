import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAllRooms, IRoomsFilter } from '../models/rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor(private _HttpClient: HttpClient) {  }

  getAllRooms(data: IRoomsFilter): Observable<IAllRooms> {
    return this._HttpClient.get<IAllRooms>('admin/rooms', { params: data });
  }

  AddRoom(roomData: FormData): Observable<any> {
    return this._HttpClient.post('admin/rooms', roomData);
  }

  getRoomDetails(id: string):Observable<any>{
    return this._HttpClient.get(`admin/rooms/${id}`)
  }
}
