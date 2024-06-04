import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserApiResponse, IUserParams } from '../models/users';

@Injectable()
export class UsersService {
  constructor(private _HttpClient: HttpClient) {}

  getAllUsers(userParams: IUserParams): Observable<IUserApiResponse> {
    return this._HttpClient.get<IUserApiResponse>(`admin/users`, {
      params: userParams,
    });
  }
}
