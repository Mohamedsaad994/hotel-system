import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyComponent } from './components/verify/verify.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent, title: 'Login' },
      { path: 'register',
        component: RegisterComponent,
        title: 'Register'
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
        title: 'Change Password',
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
        title: 'Reset Password',
      },
      {
        path: 'forget-password',
        component: ForgetPasswordComponent,
        title: 'Forget Password',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
