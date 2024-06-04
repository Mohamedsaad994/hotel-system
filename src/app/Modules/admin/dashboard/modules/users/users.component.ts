import { Component } from '@angular/core';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { UsersService } from './services/users.service';
import { IUser, IUserApiResponse, IUserParams } from './models/users';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  userData!: IUser[];

  constructor(
    private _HelperService: HelperService,
    private _UsersService: UsersService
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
    'updatedAt',
    'actions'
  ];

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
    actions: 'Actions'
  };

  getAllUsers() {
    const userParams: IUserParams = {
      page: 1,
      size: 10,
    };
    this._UsersService.getAllUsers(userParams).subscribe({
      next: (res: IUserApiResponse) => {
        this.userData = res.data.users
      },
      error: (error: HttpErrorResponse) =>
        this._HelperService.error(error.error.message),
      complete: () =>
        this._HelperService.success(
          'Users data has been retrieved Successfully'
        ),
    });
  }
}
