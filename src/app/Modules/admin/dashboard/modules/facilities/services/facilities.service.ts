import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IAddEditFacility, IAddFacilityResponse, IAllFacilities, IEditFacilityResponse } from '../models/facilities';

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
editFacilities(_id:string , data:IAddEditFacility): Observable<IEditFacilityResponse>{
  return this._HttpClient.put<IEditFacilityResponse>(`admin/room-facilities/${_id}` , {name:data})
}

 deleteFacility(id:number):Observable<any>{
  return this._HttpClient.delete(`room-facilities/${id}`);
}


}
