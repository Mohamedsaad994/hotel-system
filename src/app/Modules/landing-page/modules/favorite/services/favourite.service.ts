import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFavRoomResponse, IDeleteFavRes } from '../models/favourite';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

constructor(private _HttpClient:HttpClient) { }

getFavouriteRooms():Observable<IFavRoomResponse>{
  return this._HttpClient.get<IFavRoomResponse>(`portal/favorite-rooms`);
}

deleteRoom(roomId: string):Observable<IDeleteFavRes>{
  return this._HttpClient.delete<IDeleteFavRes>(`portal/favorite-rooms/${roomId}`);
}

}
