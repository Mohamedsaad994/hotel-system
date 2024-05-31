import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  imagePath: string = '';
  imageCaption: string = '';

  constructor(private _Router: Router) {}

  ngOnInit(): void {
    this.updateImageAndCaption();
  }

  checkoutUrl() {
    this._Router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => this.updateImageAndCaption());
  }

  private updateImageAndCaption(): void {
    const url = this._Router.url;
    if (url.includes('register')) {
      this.imageCaption = 'Sign Up to Roamhome';
      this.imagePath = '../../../assets/images/auth/signup.png';
    } else if (url.includes('forget-password')) {
      this.imageCaption = 'Forget Password';
      this.imagePath = '../../../assets/images/auth/forget.png';
    } else if (url.includes('reset-password')) {
      this.imageCaption = 'Reset Password';
      this.imagePath = '../../../assets/images/auth/reset.png';
    } else if (url.includes('auth')) {
      this.imageCaption = 'Sign In to Roamhome';
      this.imagePath = '../../../assets/images/auth/signin.png';
    }
  }
}
