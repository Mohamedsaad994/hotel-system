import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewCurrentUserComponent } from 'src/app/Modules/admin/dashboard/components/view-current-user/view-current-user.component';
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

  constructor(private _AuthService:AuthService, public dialog: MatDialog){}

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')
    this.getCurrentUser()
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(ViewCurrentUserComponent, {
      data: this.currentUser,
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('result',result);
      // this.getCurrentUser()
    });
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
