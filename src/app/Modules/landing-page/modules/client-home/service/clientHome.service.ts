import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientHomeService {

constructor(private _HttpClient:HttpClient) { }

  getAllAds():Observable<any>{
    return this._HttpClient.get('portal/ads')
  }

  getReviews():Observable<any>{
    return this._HttpClient.get('portal/room-reviews/65aa752bcc8304619b0fd7e4')
  }

  getAllRooms(params?: any): Observable<any>{
    return this._HttpClient.get(`portal/rooms/available?${params}`)
  }
  getAllRoom(params: any): Observable<any> {
    return this._HttpClient.get('portal/rooms/available', { params: params });
  }

  getAllComments(id: string): Observable<any>{
    return this._HttpClient.get(`portal/room-comments/${id}`)
  }

  deleteComment(id: string):Observable<any>{
    return this._HttpClient.delete(`portal/room-comments/${id}`)
  }

  updataComment(id: string, newData: object):Observable<any>{
    return this._HttpClient.patch(`portal/room-comments/${id}`, newData)
  }
}
