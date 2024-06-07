import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-unautorized',
  templateUrl: './nav-unautorized.component.html',
  styleUrls: ['./nav-unautorized.component.scss']
})
export class NavUnautorizedComponent {

  lang: string | any = localStorage.getItem('lang') !== null ? localStorage.getItem('lang') : 'en';

  constructor(private translate: TranslateService, private _Router:Router) {
    // this language will be used as a fallback when a translation isn't found in the current language

    this.onChangeValue(this.lang)
}

  onChangeValue(val: string){
    this.lang = val
    this.translate.setDefaultLang(val);

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use(val);
    localStorage.setItem('lang', this.lang)
    // this._Router.navigateByUrl('/route')
  }
}
