import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private _AuthService:AuthService,
    private _Router:Router
  ){}

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

  logOut(){
    localStorage.clear()
    // this._Router.navigate(['/auth'])
  }
}
