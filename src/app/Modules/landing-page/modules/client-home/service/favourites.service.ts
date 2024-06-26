import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

constructor(private _HttpClient:HttpClient) { }
addFavourite(roomId: string): Observable<any> {
  return this._HttpClient.post('portal/favorite-rooms', {roomId});
}
}
