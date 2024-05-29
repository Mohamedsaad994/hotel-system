import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ILogin, ILoginResponse, IRegisterUserDataResponse, IForgetPassword } from '../../interfaces/auth';
import { Observable, ObservedValueOf } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient) {}

  login(userData: ILogin): Observable<ILoginResponse> {
    return this._HttpClient.post<ILoginResponse>('admin/users/login', userData);
  }

  forgetPassword(userData: IForgetPassword): Observable<any> {
    return this._HttpClient.post('admin/users', userData);
  }

  welcomeVoice(message: string) {
    const sp = new SpeechSynthesisUtterance(message);
    [sp.voice] = speechSynthesis.getVoices();
    speechSynthesis.speak(sp);
  }

  register(userData: FormData): Observable<IRegisterUserDataResponse>{
    return this._HttpClient.post<IRegisterUserDataResponse>('portal/users', userData)
  }
}
