import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserCreated } from 'src/app/Modules/auth/interfaces/auth';
import { AuthService } from 'src/app/Modules/auth/services/auth/auth.service';
import { ChangePasswordComponent } from 'src/app/Modules/auth/components/change-password/change-password.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewCurrentUserComponent } from 'src/app/Modules/admin/dashboard/components/view-current-user/view-current-user.component';

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
    private _HelperService:HelperService,
    public dialog: MatDialog
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

  openChangeDialog(): void {

    const dialogRef = this.dialog.open(ChangePasswordComponent, {
    data: {},
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('result',result);
    });
  }

  openViewDialog(): void {

    const dialogRef = this.dialog.open(ViewCurrentUserComponent, {
      data: this.currentUser,
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('result',result);
      // this.getCurrentUser()
    });
  }

  logOut(){
    localStorage.clear()
    this._Router.navigate(['/auth'])
  }
}
