import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IExploreUsFiltration } from '../models/explore-us';
import { IRoomExplore } from '../../../components/details/models/details';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {

  constructor(private _HttpClient:HttpClient) { }

  getAllRooms(roomData: IExploreUsFiltration): Observable<IRoomExplore>{
    return this._HttpClient.get<IRoomExplore>(`portal/rooms/available`, {params: roomData})
  }
}
