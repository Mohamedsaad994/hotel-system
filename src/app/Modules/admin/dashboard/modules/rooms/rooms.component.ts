import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { RoomsService } from './services/rooms.service';
import { IAllRooms, IRoomsArrayData, IRoomsData } from './models/rooms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  pageSize: number = 10;
  pageNumber: number | undefined = 1;
  tableResponse!:IRoomsData;
  tableData: IRoomsArrayData[] = [];
constructor(private _HelperService:HelperService ,
   private  _RoomsService:RoomsService){}

   OnInit(){
    this.onGetAllRooms()
   }

   headers: string[] = [
    'roomNumber',
    'image',
    'price',
    'discount',
    'capacity',
    'category',
    'actions'
  ];
  displayHeaders: { [key: string]: string } = {
    roomNumber: 'Room number',
    image: 'Image',
    price: 'Price',
    discount: 'Discount',
    capacity: 'Capacity',
    category: 'Category',
    actions: 'Actions'
  };
room !: IAllRooms;
roomsData !: IRoomsArrayData[];
  handleViewItem(id: string): void {
    console.log('View item:', id);
  }
  handleEditItem(id: string): void {
    console.log('Edit item:', id);
  }
  handleDeleteItem(id: string): void {
    console.log('Delete item:', id);
  }
onGetAllRooms(){
let  params={
    pageSize: this.pageSize,
    pageNumber: this.pageNumber, 
  }
  this._RoomsService.getAllRooms(params).subscribe({
    next:(res)=>{
          this.tableResponse = res.data;
          this.tableData = this.tableResponse?.rooms;
    },
    error:(err: HttpErrorResponse)=> this._HelperService.error(err)
  })
}

}
