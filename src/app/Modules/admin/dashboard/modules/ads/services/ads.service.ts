import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAllAds, IAdDetailsResponse } from '../models/ads';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

constructor(private _HttpClient:HttpClient) { }

getAllAds():Observable<IAllAds>{
  return this._HttpClient.get<IAllAds>('admin/ads');
}

getAdDetails(id:string):Observable<IAdDetailsResponse>{
  return this._HttpClient.get<IAdDetailsResponse>(`admin/ads/${id}`);
}

deleteAd(id:string):Observable<any>{
  return this._HttpClient.delete(`admin/ads/${id}`);
}

}
