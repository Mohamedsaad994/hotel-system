import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddEditFacility, IAddFacilityResponse, IAllFacilities, IEditFacilityResponse, IFacilitiesDetailsResponse } from '../models/facilities';

@Injectable({
  providedIn: 'root',
})
export class FacilitiesService {
  constructor(private _HttpClient: HttpClient) {  }

getAllFacilities(): Observable<IAllFacilities> {
  return this._HttpClient.get<IAllFacilities>('admin/room-facilities')
}
addFacilities(data:IAddEditFacility): Observable<IAddFacilityResponse>{
  return this._HttpClient.post<IAddFacilityResponse>(`admin/room-facilities` , {name:data})
}
detailsFacilities(_id:string):Observable<any> {
  return this._HttpClient.get(`admin/room-facilities/${_id}`)
}
editFacilities(_id:string , newName:IAddEditFacility): Observable<any>{
  return this._HttpClient.put(`admin/room-facilities/${_id}` , {name:newName})
}
}
