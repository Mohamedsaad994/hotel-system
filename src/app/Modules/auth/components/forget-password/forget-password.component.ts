import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { AuthService } from '../../services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  constructor(
    private _AuthService: AuthService,
    private _HelperService: HelperService,
    private _Router:Router
  ) {}

  forgetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
   
  });
 
  onForgetPassword(forgetPasswordForm: FormGroup) {
    if (this.forgetPasswordForm.valid) {
      this._AuthService.forgetPassword(forgetPasswordForm.value).subscribe({
        next:()=>{},
        error: (error: HttpErrorResponse) => this._HelperService.error(error),
        complete: ()=> this._Router.navigate(['/auth/reset-password'])
      })
    }
  }
  
  










  }




