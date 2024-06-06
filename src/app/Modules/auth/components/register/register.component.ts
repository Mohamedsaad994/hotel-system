import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { IRegisterUserDataResponse } from '../../interfaces/auth';
import { HttpErrorResponse } from '@angular/common/http';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    private _AuthService:AuthService,
    private _HelperService:HelperService,
    private _Router:Router
  ){}

  image!: File;
  url!: any;


  registerForm:FormGroup = new FormGroup({
    userName : new FormControl('', [Validators.required, Validators.pattern(/^([a-zA-Z]{4,7}[0-9]{1})$/gm)]),
    email: new FormControl('', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,9}$/)]),
    country : new FormControl('', [Validators.required]),
    phoneNumber : new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    profileImage: new FormControl(''),
    role: new FormControl('user'),
    password : new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword : new FormControl(''),
  }, {validators: [this.confirmPass]} as FormControlOptions)

  confirmPass(group:FormGroup):void{
    const password = group.get('password')
    const confirmPassword = group.get('confirmPassword')

    if(confirmPassword?.value == ''){
      confirmPassword.setErrors({required:true})
    }else if(password?.value !== confirmPassword?.value){
      confirmPassword?.setErrors({mismatch:true})
  }
}

sendFormData(registerForm: FormGroup):void{
  const data = new FormData;

  for (let key in registerForm.value) {
    if (key === "profileImage") continue;
    data.append(key, registerForm.value[key]);
  }

  if (this.image) data.append("profileImage", this.image);

  if(registerForm.valid){
    this._AuthService.register(data).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err: HttpErrorResponse)=>{
        this._HelperService.error(err)
      },
      complete:()=>{
        this._HelperService.success('Sign up successfully')
        this._Router.navigate(['/auth'])
      }
    })
  }
}

  onSelect(event: any) {
    const files = event.target.files;
    if (files.length === 0)
        return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
        // this.message = "Only images are supported.";
        return;
    }

    const reader = new FileReader();
    this.image = files[0];
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
    }
  }
}
