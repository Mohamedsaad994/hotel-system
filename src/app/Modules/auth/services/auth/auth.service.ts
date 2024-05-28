import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin, ILoginResponse } from '../../interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient) {}

  login(userData: ILogin): Observable<ILoginResponse> {
    return this._HttpClient.post<ILoginResponse>('admin/users/login', userData);
  }
}
