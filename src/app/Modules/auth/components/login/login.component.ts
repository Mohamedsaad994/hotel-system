import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { ILoginResponse } from '../../interfaces/auth';
import { HttpErrorResponse } from '@angular/common/http';
import { IFormFields } from 'src/app/Modules/shared/models/shared';
import { Role } from 'src/app/Core/Enums/role.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  });

  userData!: ILoginResponse;

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

  constructor(
    private _AuthService: AuthService,
    private _HelperService: HelperService,
    private _Router: Router
  ) {}

  onLogin(loginForm: FormGroup) {
    if (loginForm.invalid) {
      // Optionally handle the case where the form is invalid
      return;
    }

    this._AuthService.login(loginForm.value).subscribe({
      next: (res: ILoginResponse) => { this.userData = res },
      error: (error: HttpErrorResponse) => this._HelperService.error(error),
      complete: () => {
        this._AuthService.welcomeVoice('Welcome Back Ya my frienda');
        localStorage.setItem('userToken', this.userData.data.token);
        localStorage.setItem('role', this.userData.data.user.role);
        if (this.userData.data.user.role == Role.user) {

        } else if (this.userData.data.user.role = Role.admin) {
          this._Router.navigate(['admin/dashboard/facilities'])
        }
      }
    });
  }
}
