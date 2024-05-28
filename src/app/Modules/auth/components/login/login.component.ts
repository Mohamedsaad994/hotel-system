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
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  });

  formFields: IFormFields[] = [
    {
      label: 'Email Address',
      controlName: 'email',
      placeholder: 'Enter your E-mail'
    },
    {
      label: 'Password',
      controlName: 'password',
      placeholder: 'Enter your password'
    },
  ];

  onLogin(loginForm: FormGroup) {
    if (loginForm.invalid) {
      // Optionally handle the case where the form is invalid
      return;
    }

    this._AuthService.login(loginForm.value).subscribe({
      next: (res: ILoginResponse) => { console.log(res); },
      error: (error: HttpErrorResponse) => this._HelperService.error(error),
      complete: () => this._HelperService.success('Logged in Successfully')
    });
  }
}
