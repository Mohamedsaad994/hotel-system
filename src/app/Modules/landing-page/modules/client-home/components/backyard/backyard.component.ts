import { Component, OnInit } from '@angular/core';
import { IRoomsArrayData, IRoomsUserDetails } from 'src/app/Modules/admin/dashboard/modules/rooms/models/rooms';
import { ClientHomeService } from '../../service/clientHome.service';

@Component({
  selector: 'app-backyard',
  templateUrl: './backyard.component.html',
  styleUrls: ['./backyard.component.scss']
})
export class BackyardComponent implements OnInit{

  emptyImage: string = '../../../../../../../assets/images/emptyImage.jpg';
  roomsData:IRoomsArrayData[] | any=[];
  roomRespnse:IRoomsUserDetails|undefined;
  pageNumber: number = 2;
  pageSize: number = 4;


  constructor(private _ClientHomeService:ClientHomeService){}

  ngOnInit(): void {
    this.onGetAllRooms()
  }

  onGetAllRooms() {
    let params = {
      page: this.pageNumber,
      size: this.pageSize,
    };
    return this._ClientHomeService.getAllRoom(params).subscribe({
      next: (res) => {
        this.roomRespnse = res;
        this.roomsData = res.data.rooms;
      },
    });
  }
}
