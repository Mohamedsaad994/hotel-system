import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  constructor(
    private _UsersService:UsersService,
    private _HelperService:HelperService
  ){}
}
