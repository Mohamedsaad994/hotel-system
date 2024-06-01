import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {

constructor(private _HttpClient:HttpClient) { }


deleteFacility(id:number):Observable<any>{
  return this._HttpClient.delete(`room-facilities/${id}`);
}
}
