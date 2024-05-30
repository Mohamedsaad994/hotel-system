import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  constructor(private _Router: Router) {}

  imagePath: string = '';
  imageCaption: string = '';
  // 01 - _Router.events.subscribe()
  //      inside num 01 _Router.url
  // 02 - ActivatedRoute.urlConfig
  // 03 - Resolver

  ngAfterViewChecked(): void {
    this.checkoutUrl();
  }

  checkoutUrl() {
    this._Router.events.subscribe(() => {
      const url = this._Router.url;
      if (url.includes('register')) {
        this.imageCaption = 'Sign Up to Roamhome';
        this.imagePath = '../../../assets/images/auth/signup.png';
      } else if (url.includes('forget-password')) {
        this.imageCaption = 'Forget Password';
        this.imagePath = '../../../assets/images/auth/forget.png';
      } else if (url.includes('/reset-password')) {
        this.imageCaption = 'Reset Password';
        this.imagePath = '../../../assets/images/auth/reset.png';
      } else if (url.includes('/auth')) {
        this.imageCaption = 'Sign In to Roamhome';
        this.imagePath = '../../../assets/images/auth/signin.png';
      }
    });
  }
}
