import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { Ireset, IresetResponse } from '../../interfaces/Ireset';
import { HttpErrorResponse } from '@angular/common/http';
import { IFormFields } from 'src/app/Modules/shared/models/shared';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})

export class ResetPasswordComponent {
  constructor(private _AuthService:AuthService, private _HelperService:HelperService ){}
  resetForm:FormGroup = new FormGroup ({
    email: new FormControl(null, [Validators.required, Validators.email]),
    OTP: new FormControl(null,[Validators.required] ),
    password: new FormControl(null, [Validators.required, Validators.pattern(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
    )]),
    
  })


  onReset(resetForm:FormGroup){
    if(resetForm.invalid){
      return;
    }
    this._AuthService.reset(resetForm.value).subscribe({
      next: (res:IresetResponse) => { },
      error: (error:HttpErrorResponse) => this._HelperService.error(error),
      complete: () => this._HelperService.success("Done Successfully")
    })
  }

}
