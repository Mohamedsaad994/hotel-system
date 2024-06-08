import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserCreated } from 'src/app/Modules/auth/interfaces/auth';
import { AuthService } from 'src/app/Modules/auth/services/auth/auth.service';

@Component({
  selector: 'app-nav-authorized',
  templateUrl: './nav-authorized.component.html',
  styleUrls: ['./nav-authorized.component.scss']
})
export class NavAuthorizedComponent implements OnInit{

  userId: any=''
  currentUser!: UserCreated
  lang: string | any =
  localStorage.getItem('lang') !== null ? localStorage.getItem('lang') : 'en';


  constructor(
    private translate: TranslateService,
    private _Router: Router,
    private _AuthService:AuthService,
    private _HelperService:HelperService
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language

    this.onChangeValue(this.lang);
  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')
    this.getCurrentUser()
  }

  getCurrentUser(){
    this._AuthService.getUserProfile(this.userId).subscribe({
      next:(res)=>{
        this.currentUser = res.data.user
      }
    })
  }

  onChangeValue(val: string) {
    this.lang = val;
    this.translate.setDefaultLang(val);

    this.translate.use(val);
    localStorage.setItem('lang', this.lang);
    this._HelperService.onChangeLang(val);

  }

  logOut(){
    localStorage.clear()
    this._Router.navigate(['/auth'])
  }
}
