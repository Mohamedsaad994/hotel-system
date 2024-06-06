import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { RoomsService } from './services/rooms.service';
import { IAllRooms, IRoomsArrayData, IRoomsFilter,IParams, Room } from './models/rooms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/Modules/shared/components/delete/delete.component';
import { ViewComponent } from './components/view/view.component';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  pageSize: number = 10;
  pageNumber: number = 0;
  tableResponse: IAllRooms = {
    data: {
      rooms: [],
      totalCount: 0,
    },
    message: '',
    success: false,
  };
  tableData: IRoomsArrayData[] = [];

  //search
  
 searchValue!:string;
  pageIndex = 0;
  totalCount!:number;
 


  currentRoomData!: Room;

  constructor(
    private _HelperService: HelperService,
    private _RoomsService: RoomsService,
    private _Router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.onGetAllRooms();
  }

  headers: string[] = ['roomNumber', 'images', 'price', 'discount', 'capacity', 'actions'];

  displayHeaders: { [key: string]: string } = {
    roomNumber: 'Room number',
    images: 'Image',
    price: 'Price',
    discount: 'Discount',
    capacity: 'Capacity',
    actions: 'Actions',
  };

  handleViewItem(id: string): void {
    // console.log('View item:', id);
    this._Router.navigate([`/admin/dashboard/rooms/view/${id}`])
  }


  handleEditItem(id: string): void {
    console.log('Edit item:', id);
    this._Router.navigate([`/admin/dashboard/rooms/edit/${id}`]);
  }

  onGetAllRooms(): void {
    const params: IRoomsFilter = {
      size: this.pageSize,
      page: this.pageNumber,
    };

    this._RoomsService.getAllRooms(params).subscribe({
      next: (res) => {
        this.tableResponse = res;
        this.tableData = this.tableResponse.data.rooms;
        this.totalCount = res.data.totalCount;
      },
      error: (err: HttpErrorResponse) => this._HelperService.error(err),
      complete: () => this._HelperService.success('Rooms have been retrieved successfully'),
    });
  }
  
  resetSearchInput() {
    this.searchValue = '';
    this.onGetAllRooms();
  }

  filterByRoomNumber(searchVal: HTMLInputElement) {
    if (searchVal) {
      this.tableData = this.tableData.filter((param: Room) => param.roomNumber.includes(searchVal.value));
      this.totalCount = this.tableResponse.data.totalCount
    }
  }

  //delete

  openDeleteDialog(id: string): void {
    this._RoomsService.getRoomDetails(id).subscribe({
      next: (res) => {
        const dialogRef = this.dialog.open(DeleteComponent, {
          data: { name: res.data.roomNumber },
        });
        dialogRef.afterClosed().subscribe((result) => {
          if (result) {
            this.onDeleteItem(id);
          }
        });
      },
    });
  }


  onDeleteItem(id: string): void {
    this._RoomsService.deleteRoom(id).subscribe({
      next: () => {},
      error: (err: HttpErrorResponse) => {
        this._HelperService.error(err);
      },
      complete: () => {
        this._HelperService.success('Room has been deleted');
        this.onGetAllRooms();
      },
    });
  }

  handleDeleteItem(id: string): void {
    this.openDeleteDialog(id);
  }

  pageNumberEvent(event: number): void {
    this.pageNumber = event;
    this.onGetAllRooms();
  }

  pageSizeEvent(event: number): void {
    this.pageSize = event;
    this.onGetAllRooms();
  }
}
