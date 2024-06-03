import { Component, OnInit } from '@angular/core';
import { UserCreated } from 'src/app/Modules/auth/interfaces/auth';
import { AuthService } from 'src/app/Modules/auth/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  emptyImge:string= '../../../../../assets/images/emptyImage.jpg'
  userId: any = ''
  currentUser!: UserCreated

  constructor(private _AuthService:AuthService){}

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')
    this.getCurrentUser()
  }

  getCurrentUser(){
    this._AuthService.getUserProfile(this.userId).subscribe({
      next: (res)=>{
        this.currentUser = res.data.user
      },
      error: (err)=> {
      }
    })
  }

}
