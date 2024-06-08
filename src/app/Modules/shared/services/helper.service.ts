import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class HelperService {
  constructor(private _ToastrService: ToastrService) {}

  private langChange: Subject<string> = new Subject<string>()

  langDirChange = this.langChange.asObservable()

  onChangeLang(lang: string) {
    this.langChange.next(lang);
  }

  success(message: string) {
    this._ToastrService.success(message, 'Success');
  }

  error(error: HttpErrorResponse) {
    this._ToastrService.error(error.error.message, 'Error');
  }
}
