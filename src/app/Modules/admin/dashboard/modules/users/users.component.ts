import { Component } from '@angular/core';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { UsersService } from './services/users.service';
import { IUser, IUserApiResponse, IUserParams } from './models/users';
import { HttpErrorResponse } from '@angular/common/http';
import { ViewCurrentUserComponent } from '../../components/view-current-user/view-current-user.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/Modules/auth/services/auth/auth.service';
import { UserCreated } from 'src/app/Modules/auth/interfaces/auth';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {

  userData!: IUser[];
  pageSize: number = 0;
  pageNumber: number = 0;
  userResponse: IUserApiResponse = {
    data: {
      users: [],
      totalCount: 0
    },
    success: false,
    message: ''
  };
  // dialog: any;
  currentUser: any;
  currentUserData!: UserCreated

  constructor(
    private _HelperService: HelperService,
    private _UsersService: UsersService,
    private _AuthService:AuthService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  headers: string[] = [
    'userName',
    'email',
    'phoneNumber',
    'country',
    'role',
    'profileImage',
    'verified',
    'createdAt',
    // 'updatedAt',
    'actions',
  ];

  handleViewItem(id: string): void {
    this.openViewDialog(id)
  }


  openViewDialog(id: string): void {

    this._AuthService.getUserProfile(id).subscribe({
      next:(res)=>{
        this.currentUser = res.data.user
        const dialogRef = this.dialog.open(ViewCurrentUserComponent, {
          data: this.currentUser,
        });


        dialogRef.afterClosed().subscribe((result: any) => {
          console.log('The dialog was closed');
          console.log('result',result);
          // this.getCurrentUser()
        });
      }
    })

  }

  displayHeaders: { [key: string]: string } = {
    userName: 'User name',
    email: 'Email',
    phoneNumber: 'Phone number',
    country: 'Country',
    role: 'Role',
    profileImage: 'Profile Image',
    verified: 'Verified',
    createdAt: 'Created at',
    updatedAt: 'Updated at',
    actions: 'Actions',
  };

  getAllUsers() {
    const userParams: IUserParams = {
      page: this.pageNumber,
      size: this.pageSize,
    };
    this._UsersService.getAllUsers(userParams).subscribe({
      next: (res: IUserApiResponse) => {
        this.userResponse = res;
        this.userData = res.data.users;
      },
      error: (error: HttpErrorResponse) =>
        this._HelperService.error(error.error.message),
      complete: () =>
        this._HelperService.success(
          'Users data has been retrieved Successfully'
        ),
    });
  }

  pageNumberEvent(event: number) {
    this.pageNumber = event;
    this.getAllUsers();
  }

  pageSizeEvent(event: number) {
    this.pageSize = event;
    this.getAllUsers();
  }

}
