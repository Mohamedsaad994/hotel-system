import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private _HttpClient:HttpClient) { }

  AddRoom(roomData:FormData):Observable<any>{
    return this._HttpClient.post('admin/rooms', roomData)
  }
}
