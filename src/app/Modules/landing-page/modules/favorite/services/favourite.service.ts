import { Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFavRoomResponse } from '../models/favourite';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

constructor(private _HttpClient:HttpClient) { }

getFavouriteRooms():Observable<IFavRoomResponse>{
  return this._HttpClient.get<IFavRoomResponse>(`portal/favorite-rooms`);
}

deleteRoom(roomId: any):Observable<any>{
  return this._HttpClient.delete(`portal/favorite-rooms/` ,{params: roomId});
}

}
