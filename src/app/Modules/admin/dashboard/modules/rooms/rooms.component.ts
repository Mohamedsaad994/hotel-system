import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { RoomsService } from './services/rooms.service';
import { IAllRooms, IRoomsArrayData, IRoomsFilter, Room } from './models/rooms';
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
  pageNumber: number = 1;
  tableResponse!: IAllRooms;
  tableData: IRoomsArrayData[] = [];
  currentRoomData!: Room;
  constructor(
    private _HelperService: HelperService,
    private _RoomsService: RoomsService,
    private _Router:Router,
    public dialog:MatDialog
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
    // console.log('View item:', id);
    this._Router.navigate([`/admin/dashboard/rooms/view/${id}`])
  }


  handleEditItem(id: string): void {
    console.log('Edit item:', id);
    this._Router.navigate([`/admin/dashboard/rooms/edit/${id}`])
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

  //delete

openDeleteDialog(id:string):void{
  this._RoomsService.getRoomDetails(id).subscribe({
    next: (res) =>{
      const dialogRef = this.dialog.open(DeleteComponent, {
        data: {name: res.data.roomNumber},
      });
      dialogRef.afterClosed().subscribe((result) => {
        if(result){
          this.onDeleteItem(id);
        }
      })
    }
  })
}

onDeleteItem(id:string){
  this._RoomsService.deleteRoom(id).subscribe({
    next: (res) =>{},
    error: (err:HttpErrorResponse) =>{
      this._HelperService.error(err)
    },
    complete: () => {
      this._HelperService.success('room has been deleted');
      this.onGetAllRooms();
    }
  })
}

  handleDeleteItem(id: string): void {
    this.openDeleteDialog(id);
  }

}
