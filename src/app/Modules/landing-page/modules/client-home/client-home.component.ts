import { Component, HostListener, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.scss'],
})
export class ClientHomeComponent implements OnInit {
  private _HelperService = inject(HelperService);
  private _Router = inject(Router);
  language: string | any = localStorage.getItem('lang') !== null ? localStorage.getItem('lang') : 'en';

  startDate: string = '';
  endDate: string = '';

  roomFilterForm: FormGroup = new FormGroup({
    startDate: new FormControl(null, Validators.required),
    endDate: new FormControl(null, Validators.required),
    capacity: new FormControl(null, Validators.required),
  });

  showDatePicker: boolean = false;

  roomCapacity: number = 0;
  roomCapacityPeople: string = 'Person';

  ngOnInit(): void {
    this._HelperService.langDirChange.subscribe((lang: string) => {
      this.language = lang;
    });
  }

  openDatePicker() {
    this.showDatePicker = true;
  }

  closeDatePicker() {
    this.showDatePicker = false;
  }

  updateDateRange() {
    const dateRangeInput = document.getElementById('dateRange') as HTMLInputElement;
    dateRangeInput.value = `${this.startDate} - ${this.endDate}`;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const datePickerElement = document.querySelector('.date-picker');
    const dateRangeInputElement = document.getElementById('dateRange');

    if (datePickerElement && dateRangeInputElement &&
      !datePickerElement.contains(event.target as Node) &&
      !dateRangeInputElement.contains(event.target as Node)) {
      this.showDatePicker = false;
      dateRangeInputElement.blur();
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.showDatePicker = false;
      const dateRangeInputElement = document.getElementById('dateRange') as HTMLInputElement;
      dateRangeInputElement.blur();
    }
  }

  addRoomCapacity() {
    this.roomCapacity++;
    this.roomCapacityPeople = this.roomCapacity > 1 ? 'People' : 'Person';
    this.roomFilterForm.patchValue({ capacity: this.roomCapacity });
  }

  subtractRoomCapacity() {
    if (this.roomCapacity > 0) {
      this.roomCapacity--;
      this.roomCapacityPeople = this.roomCapacity > 1 ? 'People' : this.roomCapacity === 1 ? 'Person' : '';
    } else {
      this.roomCapacity = 0;
      this.roomCapacityPeople = '';
    }
    this.roomFilterForm.patchValue({ capacity: this.roomCapacity });
  }

  onExploreRooms(roomFilterData: FormGroup) {
    if (localStorage.getItem('userToken') !== null) {
      const queryParams = this.roomFilterForm.value;
      this._Router.navigate(['/landing-page/explore-us'], { queryParams });
    } else {
      this._Router.navigate(['/auth']);
    }
  }
}
