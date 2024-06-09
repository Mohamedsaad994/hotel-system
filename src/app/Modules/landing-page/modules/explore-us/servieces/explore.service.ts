import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {

  constructor(private _HttpClient:HttpClient) { }

  getAllRooms(): Observable<any>{
    return this._HttpClient.get(`portal/rooms/available`)
  }
}
