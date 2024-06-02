import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAllAds } from '../models/ads';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

constructor(private _HttpClient:HttpClient) { }

getAllAds():Observable<IAllAds>{
  return this._HttpClient.get<IAllAds>('admin/ads');
}

}
