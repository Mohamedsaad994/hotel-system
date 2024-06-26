import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin, ILoginResponse, IForgetPassword } from '../../interfaces/auth';
import { Observable } from 'rxjs';
import { Ireset, IresetResponse } from '../../interfaces/Ireset';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient) {}

  login(userData: ILogin): Observable<ILoginResponse> {
    return this._HttpClient.post<ILoginResponse>('admin/users/login', userData);
  }

  changePassword(data: FormGroup):Observable<any>{
    return this._HttpClient.post('admin/users/change-password', data)
  }

  reset(userData:Ireset):Observable<IresetResponse>{
    return this._HttpClient.post<IresetResponse>('admin/users/reset-password', userData);
  }
  forgetPassword(userData: IForgetPassword): Observable<any> {
    return this._HttpClient.post('admin/users', userData);
  }

  welcomeVoice(message: string) {
    const sp = new SpeechSynthesisUtterance(message);
    [sp.voice] = speechSynthesis.getVoices();
    speechSynthesis.speak(sp);
  }

  register(userData: FormData): Observable<any>{
    return this._HttpClient.post('admin/users', userData)
  }

  getUserProfile(id: string):Observable<any>{
    return this._HttpClient.get(`admin/users/${id}`)
  }
}
