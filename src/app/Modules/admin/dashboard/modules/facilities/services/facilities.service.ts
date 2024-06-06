import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IAddEditFacility,
  IAddFacilityResponse,
  IAllFacilities,
  IEditFacilityResponse,
  IFacilitiesCreatedByData,
  IFacilitiesDetails,
  IFacilitiesDetailsResponse,
  IFacilitiesParams,
} from '../models/facilities';

@Injectable({
  providedIn: 'root',
})
export class FacilitiesService {
  constructor(private _HttpClient: HttpClient) {}

  getAllFacilities(myParams:any): Observable<IAllFacilities> {
    return this._HttpClient.get<IAllFacilities>('admin/room-facilities', {params:myParams});

  }
  addFacilities(data: IAddEditFacility): Observable<IAddFacilityResponse> {
    return this._HttpClient.post<IAddFacilityResponse>(
      `admin/room-facilities`,
      { name: data }
    );
  }
  detailsFacilities(_id: string): Observable<IFacilitiesDetailsResponse> {
    return this._HttpClient.get<IFacilitiesDetailsResponse>(
      `admin/room-facilities/${_id}`
    );
  }
  editFacilities(
    _id: string,
    newName: IAddEditFacility
  ): Observable<IEditFacilityResponse> {
    return this._HttpClient.put<IEditFacilityResponse>(
      `admin/room-facilities/${_id}`,
      { name: newName }
    );
  }

  deleteFacility(id: string): Observable<any> {
    return this._HttpClient.delete(`admin/room-facilities/${id}`);
  }
}
