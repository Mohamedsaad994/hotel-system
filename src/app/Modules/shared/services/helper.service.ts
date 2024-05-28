import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private _ToastrService: ToastrService) {}

  success(message: string) {
    this._ToastrService.success(message, 'Success')
  }

  error(error: HttpErrorResponse) {
    this._ToastrService.error(error.error.message, 'Error');
  }
}
