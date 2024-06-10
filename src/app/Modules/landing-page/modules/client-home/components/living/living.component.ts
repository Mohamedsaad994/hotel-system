import { Component } from '@angular/core';
import { IRoomsArrayData, IRoomsUserDetails } from 'src/app/Modules/admin/dashboard/modules/rooms/models/rooms';
import { ClientHomeService } from '../../service/clientHome.service';

@Component({
  selector: 'app-living',
  templateUrl: './living.component.html',
  styleUrls: ['./living.component.scss']
})
export class LivingComponent {

  emptyImage: string = '../../../../../../../assets/images/emptyImage.jpg';
  roomsData:IRoomsArrayData[] | any=[];
  roomRespnse:IRoomsUserDetails|undefined;
  pageNumber: number = 3;
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
