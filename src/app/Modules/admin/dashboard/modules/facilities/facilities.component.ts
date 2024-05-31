import { FacilitiesService } from './services/facilities.service';
import { Component } from '@angular/core';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { IAllFacilities, IFacilitiesArrayData } from './models/facilities';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
})
export class FacilitiesComponent {
  constructor(
    private _HelperService: HelperService,
    private _FacilitiesService: FacilitiesService
  ) {}

  headers: string[] = [
    'name',
    'createdAt',
    'updatedAt',
    'actions'
  ];

  displayHeaders: { [key: string]: string } = {
    name: 'Name',
    createdAt: 'Created at',
    updatedAt: 'Updated at',
    actions: 'Actions'
  };

  roomFacilities!: IAllFacilities;
  roomFacilitiesData!: IFacilitiesArrayData[];

  ngOnInit(): void {
    this.onGetAllFacilities();
  }

  onGetAllFacilities() {
    this._FacilitiesService.getAllFacilities().subscribe({
      next: (res: IAllFacilities) => {
        this.roomFacilities = res;
        this.roomFacilitiesData = this.roomFacilities.data.facilities
      },

      error: (error: HttpErrorResponse) => this._HelperService.error(error),
      complete: () =>
        this._HelperService.success(
          'Facilities Has Been Retrieved Successfully'
        ),
    });
  }

  handleViewItem(id: string): void {
    console.log('View item:', id);
  }

  handleEditItem(id: string): void {
    console.log('Edit item:', id);
  }

  handleDeleteItem(id: string): void {
    console.log('Delete item:', id);
  }
}
