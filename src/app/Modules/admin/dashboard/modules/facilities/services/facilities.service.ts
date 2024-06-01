import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { IAllFacilities } from '../models/facilities';

@Injectable({
  providedIn: 'root',
})
export class FacilitiesService {
  constructor(private _HttpClient: HttpClient) {  }

  getAllFacilities(): Observable<IAllFacilities> {
    return this._HttpClient.get<IAllFacilities>('admin/room-facilities')
  }
  deleteFacility(id:number):Observable<any>{
  return this._HttpClient.delete(`room-facilities/${id}`);
}

}
