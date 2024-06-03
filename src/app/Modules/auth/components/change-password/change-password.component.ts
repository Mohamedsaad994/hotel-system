import { Component, Inject } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/Modules/shared/components/delete/delete.component';
import { AuthService } from '../../services/auth/auth.service';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _AuthService:AuthService,
    private _HelperService:HelperService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  changePassForm: FormGroup = new FormGroup({
    oldPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    newPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('')
  }, {validators: [this.confirmPass]} as FormControlOptions)

  confirmPass(group:FormGroup):void{
    const newPassword = group.get('newPassword')
    const confirmPassword = group.get('confirmPassword')

    if(confirmPassword?.value == ''){
      confirmPassword.setErrors({required:true})
    }else if(newPassword?.value !== confirmPassword?.value){
      confirmPassword?.setErrors({mismatch:true})
  }
  }

  sendChangePass(){
    let data = this.changePassForm.value
    this._AuthService.changePassword(data).subscribe({
      next:(res)=>{ console.log(res)},
      error:(err)=> {
        this._HelperService.error(err)
      },
      complete:()=>{
        this._HelperService.success('Password Changed Succesfully')
      }
    })
  }
}
