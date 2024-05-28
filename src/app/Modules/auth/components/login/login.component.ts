import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { ILoginResponse } from '../../interfaces/auth';
import { HttpErrorResponse } from '@angular/common/http';
import { IFormFields } from 'src/app/Modules/shared/models/shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private _AuthService: AuthService,
    private _HelperService: HelperService
  ) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  formFields: IFormFields[] = [
    {
      controlName: 'Email Address',
      label: 'email',
      placeholder: 'Enter your E-mail'
    },
    {
      controlName: 'Password',
      label: 'password',
      placeholder: 'Enter your password'
    },
  ]

  onLogin(loginForm: FormGroup) {
    this._AuthService.login(loginForm.value).subscribe({
      next: (res: ILoginResponse) => { console.log(res); },
      error: (error: HttpErrorResponse) => this._HelperService.error(error),
      complete: () => this._HelperService.success('Logged in Successfully')
    })
  }
}
