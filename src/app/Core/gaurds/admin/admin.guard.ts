// import { adminGuard } from './admin.guard';
import { inject } from '@angular/core';
import { Role } from './../../Enums/role.enum';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

export const adminGuard: CanActivateFn = ( route , state ) =>{


  // | Observable<UrlTree | boolean>
  // | Promise<UrlTree | boolean>
  // | UrlTree
  // | boolean => {

  const _Router = inject(Router)
    const role = Role.admin

    if(localStorage.getItem('role') !== null && localStorage.getItem('role') == role){
      return true;
    }else{
      _Router.navigate(['/auth'])
      return false
    }
  // role user and admin
  /*
      {
    "success": true,
    "message": "User created successfully",
    "data": {
        "userCreated": {
            "userName": "admin32",
            "email": "kebad96826@avastu.com",
            "password": "$2b$08$iBX4zhTdwZ8P9RxwZcbSTetec7mozxv94rp.o5OB1pEyzayISS8S.",
            "phoneNumber": 1069807262,
            "country": "egypt",
            "role": "user",
            "profileImage": "http://res.cloudinary.com/dpa4yqvdv/image/upload/v1717091125/users/ja5oongq2zafa48s8mna.png",
            "verified": false,
            "_id": "6658bb35a17944edfd9f127f",
            "createdAt": "2024-05-30T17:45:25.529Z",
            "updatedAt": "2024-05-30T17:45:25.529Z"
        }
    }
}
    */

};
