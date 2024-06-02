import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { RoomsService } from './services/rooms.service';
import { IAllRooms, IRoomsArrayData, IRoomsFilter } from './models/rooms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  pageSize: number = 10;
  pageNumber: number = 1;
  tableResponse!: IAllRooms;
  tableData: IRoomsArrayData[] = [];

  constructor(
    private _HelperService: HelperService,
    private _RoomsService: RoomsService,
    private _Router:Router
  ) {}

  ngOnInit(): void {
    this.onGetAllRooms();
  }

  headers: string[] = [
    'roomNumber',
    'images',
    'price',
    'discount',
    'capacity',
    'actions',
  ];

  displayHeaders: { [key: string]: string } = {
    roomNumber: 'Room number',
    images: 'Image',
    price: 'Price',
    discount: 'Discount',
    capacity: 'Capacity',
    actions: 'Actions',
  };

  handleViewItem(id: string): void {
    console.log('View item:', id);
  }

  handleEditItem(id: string): void {
    console.log('Edit item:', id);
    this._Router.navigate([`/admin/dashboard/rooms/edit/${id}`])
  }

  handleDeleteItem(id: string): void {
    console.log('Delete item:', id);
  }

  onGetAllRooms() {
    const params: IRoomsFilter = {
      size: this.pageSize,
      page: this.pageNumber,
    };

    this._RoomsService.getAllRooms(params).subscribe({
      next: (res) => {
        this.tableResponse = res;
        this.tableData = this.tableResponse.data.rooms;
      },
      error: (err: HttpErrorResponse) => this._HelperService.error(err),
      complete: () => this._HelperService.success('Rooms have been Retrieved Successfully'),
    });
  }
}
