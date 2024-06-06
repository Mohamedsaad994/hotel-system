import { FacilitiesService } from './services/facilities.service';
import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/Modules/shared/components/delete/delete.component';

import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import {
  IAddEditFacility,
  IAllFacilities,
  IEditFacilityResponse,
  IFacilitiesArrayData,
  IFacilitiesCreatedByData,
  IFacility,
  IFacilitiesParams,
} from './models/facilities';
import { HttpErrorResponse } from '@angular/common/http';
import { AddEditFacilitiesComponent } from './components/add-edit-facilities/add-edit-facilities.component';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
})
export class FacilitiesComponent {
  headers: string[] = ['name', 'createdAt', 'updatedAt', 'actions'];
  pageNumber: number = 10;
  pageSize: number = 1;

  displayHeaders: { [key: string]: string } = {
    name: 'Name',
    createdAt: 'Created at',
    updatedAt: 'Updated at',
    actions: 'Actions',
  };

  roomFacilities: IAllFacilities = {
    data: {
      facilities: [],
      totalCount: 0
    },
    success: false,
    message: ''
  };;
  roomFacilitiesData!: IFacilitiesArrayData[];

  //search
  searchValue!: string;
  totalCount!:number;
  createdBy: IFacilitiesCreatedByData = {
    _id: '',
    userName: ''
  }
  facilities: IFacility = {
    _id: '',
    name: '',
    createdBy: this.createdBy,
    createdAt: '',
    updatedAt: ''
  }

  constructor(
    private _HelperService: HelperService,
    private _FacilitiesService: FacilitiesService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.onGetAllFacilities();
  }

  //search




  onGetAllFacilities() {

    let paramData = {
      name:this.searchValue,
      id: this.facilities._id,
      createdBy:this.facilities.createdBy,
      createdAt:this.facilities.createdAt,
      updatedAt:this.facilities.updatedAt
    }

    this._FacilitiesService.getAllFacilities(paramData).subscribe({

      next: (res: IAllFacilities) => {
        this.roomFacilities = res;
        this.roomFacilitiesData = this.roomFacilities.data.facilities;
        this.totalCount = res.data.totalCount;
      },

      error: (error: HttpErrorResponse) => this._HelperService.error(error),
      complete: () => {},
    });
  }
  
  resetSearchInput() {
    this.searchValue = '';
    this.onGetAllFacilities();
  }

  filterByName(searchName: HTMLInputElement) {
    if (searchName) {
      this.roomFacilitiesData = this.roomFacilitiesData.filter((param: IFacility) => param.name.includes(searchName.value));
      this.totalCount = this.roomFacilities.data.totalCount
    }
  }


  onAddFacilities(data: IAddEditFacility) {
    this._FacilitiesService.addFacilities(data).subscribe({
      next: (res) => {},
      error: (err: HttpErrorResponse) => this._HelperService.error(err),
      complete: () => {
        this._HelperService.success('Facilities Added Successfully');
        this.onGetAllFacilities();
      },
    });
  }

  onDetailsFacilities(_id: string, mode: string) {
    this._FacilitiesService.detailsFacilities(_id).subscribe({
      next: (res) => {
        const dialogRef = this.dialog.open(AddEditFacilitiesComponent, {
          width: '550px',
          height: 'auto',
          data: { name: res.data.facility.name, mode: mode },
        });

        dialogRef.afterClosed().subscribe((result) => {
          if (mode == 'edit') {
            this.onEditFacilities(_id, result.name);
          }
        });
      },
    });
  }

  onEditFacilities(_id: string, newName: IAddEditFacility) {
    this._FacilitiesService.editFacilities(_id, newName).subscribe({
      next: (res: IEditFacilityResponse) => {},
      error: (err: HttpErrorResponse) => this._HelperService.error(err),
      complete: () => {
        this._HelperService.success('Facilities Updated Successfully');
        this.onGetAllFacilities();
      },
    });
  }

  handleViewItem(id: string): void {
    this.onDetailsFacilities(id, 'view');
  }

  handleEditItem(_id: string): void {
    this.onDetailsFacilities(_id, 'edit');
  }

  openAddFacilitiesDialog(): void {
    const dialogRef = this.dialog.open(AddEditFacilitiesComponent, {
      width: '550px',
      height: 'auto',
      data: { mode: 'add' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onAddFacilities(result.name);
      }
    });
  }

//delete

  openDeleteDialog(id: string): void {
    this._FacilitiesService.detailsFacilities(id).subscribe({
      next: (res) => {
        const dialogRef = this.dialog.open(DeleteComponent, {
          data: { name: res.data.facility.name },
        });

        dialogRef.afterClosed().subscribe((result) => {
          if (result) {
            this.onDeleteItem(id);
          }
        });
      },
    });
  }

  onDeleteItem(id: string) {
    this._FacilitiesService.deleteFacility(id).subscribe({
      next: (res) => {  },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        this._HelperService.error(err);
      },
      complete: () => {
        this._HelperService.success('Facility Has Been Deleted');
        this.onGetAllFacilities();
      }
    });
  }

  handleDeleteItem(id: string): void {
    this.openDeleteDialog(id);
  }

  pageNumberEvent(event: number) {
    this.pageNumber = event;
    this.onGetAllFacilities();
  }

  pageSizeEvent(event: number) {
    this.pageSize = event;
    this.onGetAllFacilities();
  }
}
