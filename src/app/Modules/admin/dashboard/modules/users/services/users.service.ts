import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAllUsers } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

constructor(private _HttpClient:HttpClient) { }

getAllUsers():Observable<IAllUsers>{
  return this._HttpClient.get<IAllUsers>('admin/users');
}

}