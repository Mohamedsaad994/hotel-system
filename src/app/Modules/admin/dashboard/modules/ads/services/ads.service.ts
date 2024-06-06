import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAllAds, IAdDetailsResponse, IAdsParams } from '../models/ads';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AdsService {
  constructor(private _HttpClient: HttpClient) {}

  getAllAds(adsParams: IAdsParams): Observable<IAllAds> {
    return this._HttpClient.get<IAllAds>('admin/ads', { params: adsParams });
  }

getAllAds(myParams:any):Observable<IAllAds>{
  return this._HttpClient.get<IAllAds>('admin/ads', {params:myParams});
}

  getAdDetails(id: string): Observable<IAdDetailsResponse> {
    return this._HttpClient.get<IAdDetailsResponse>(`admin/ads/${id}`);
  }


  deleteAd(id: string): Observable<any> {
    return this._HttpClient.delete(`admin/ads/${id}`);
  }

  createAds(adsData: FormGroup): Observable<any> {
    return this._HttpClient.post('admin/ads', adsData);
  }

  updateAds(id: string, adsData: any): Observable<any> {
    return this._HttpClient.put(`admin/ads/${id}`, adsData);
  }
}
